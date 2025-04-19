"use client";

import { useState, useCallback } from "react";
import { convertToPhonetic, PhoneticPair } from "@/services/phonetic-converter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const itemsPerPage = 5;

// Fixed neutral background colors
const textColorClasses = ['bg-emerald-100', 'bg-orange-100', 'bg-blue-100', 'bg-yellow-100', 'bg-purple-100'];
const phoneticColor = 'bg-muted';

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [phoneticPairs, setPhoneticPairs] = useState<PhoneticPair[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

  const totalPages = Math.ceil(phoneticPairs.length / itemsPerPage);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const convertTextToPhonetic = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await convertToPhonetic(inputText);
      setPhoneticPairs(response.phonetic);
      setCurrentPage(0);
    } catch (error: any) {
      console.error("Error converting text:", error);
      toast({
            title: "Error converting text",
            description: error.message || "Failed to convert text. Please try again.",
            variant: "destructive",
          });
    } finally {
      setIsLoading(false);
    }
  }, [inputText, toast]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const currentPairs = phoneticPairs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8 gap-4">
      <h1 className="text-2xl font-bold">Phoneticator</h1>

      <Textarea
        placeholder="Enter text to convert to phonetic transcription"
        className="w-full max-w-2xl h-40 resize-none"
        value={inputText}
        onChange={handleInputChange}
      />

      <Button
        onClick={convertTextToPhonetic}
        disabled={isLoading}
        className="bg-accent text-primary-foreground rounded-md shadow-sm"
      >
        {isLoading ? "Converting..." : "Convert to Phonetic"}
      </Button>

      {phoneticPairs.length > 0 && (
        <div className="max-w-3xl w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPairs.map((pair, index) => (
              <div key={index} className="flex flex-col rounded-md border shadow-sm">
                <div className={cn("px-4 py-2 font-bold", textColorClasses[index % textColorClasses.length])}>{pair.text}</div>
                <div className={cn("px-4 py-2 font-mono", phoneticColor)}>{pair.phonetic}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              variant="outline"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
