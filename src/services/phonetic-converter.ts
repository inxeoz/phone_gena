'use server';
/**
 * Represents a word and its phonetic transcription.
 */
export interface PhoneticPair {
  /**
   * The original text of the word.
   */
  text: string;
  /**
   * The phonetic transcription of the word.
   */
  phonetic: string;
}

/**
 * Represents the response from the phonetic conversion API.
 */
export interface PhoneticResponse {
  /**
   * An array of phonetic pairs, each containing a word and its transcription.
   */
  phonetic: PhoneticPair[];
}

/**
 * Asynchronously converts text to its phonetic transcription using an external API.
 *
 * @param text The text to convert.
 * @returns A promise that resolves to a PhoneticResponse object.
 */
export async function convertToPhonetic(text: string): Promise<PhoneticResponse> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "text": text
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as const
    };

    try {
        const response = await fetch("https://my-phonetic-worker.pk9009895.workers.dev/api/convert", requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json() as PhoneticResponse;
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

