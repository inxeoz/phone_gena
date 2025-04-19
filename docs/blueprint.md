# **App Name**: Phoneticator

## Core Features:

- Text Input: Input text area where the user can write or paste the text they want to convert to phonetic transcription.
- Convert to Phonetic Button: Button that triggers the API call to convert the input text into phonetic format.
- API Integration: Fetches phonetic version of the input text from the API (https://my-phonetic-worker.pk9009895.workers.dev/api/convert) and structures the response.
- Phonetic Display: Displays the original text alongside its phonetic transcription in a paired box format. Only displays a portion of the text at a time for large inputs.
- Text Navigation: Navigation buttons ('Previous' and 'Next') to navigate through the displayed text portions.

## Style Guidelines:

- Primary color: White or light grey for the background to ensure readability.
- Secondary color: Dark grey or black for the text to provide a strong contrast.
- Accent: Teal (#008080) for interactive elements like the 'Convert' and navigation buttons.
- Clear separation between the input area, the conversion button, the displayed text/phonetic pairs, and the navigation buttons.
- Use a monospace font for the phonetic transcriptions to ensure each character is clearly distinguished.
- Subtle transitions when paginating through the text portions.

## Original User Request:
create svelte application wherre user can input text or paragraph and click on button("convert to phonetic") it will fetches phonetic version of that text or paragraph and display it where is word have two box first contains acutall text and second contains phonetic version , in bottom there is two button 1: previous 2:next, so when clicking on previosu button it will take to previous text means part to text that being displayed and also for next ; here text can be very large so we only display small portion at first and if user clicks to next button we shows nextr portion ; here api example that i am going to use "const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "text": "i am the boy here your power a tree and water"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://my-phonetic-worker.pk9009895.workers.dev/api/convert", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));" and response is "{
    "phonetic": [
        {
            "text": "i",
            "phonetic": "/ˈa‍ɪ/"
        },
        {
            "text": "am",
            "phonetic": "am"
        },
        {
            "text": "the",
            "phonetic": "/ðə, ði/"
        },
        {
            "text": "boy",
            "phonetic": "/bˈɔ‍ɪ/"
        },
        {
            "text": "here",
            "phonetic": "/hˈi‍ə/"
        },
        {
            "text": "your",
            "phonetic": "/jˈɔː/"
        },
        {
            "text": "power",
            "phonetic": "/pˈa‍ʊɐ/"
        },
        {
            "text": "a",
            "phonetic": "a"
        },
        {
            "text": "tree",
            "phonetic": "/tɹˈiː/"
        },
        {
            "text": "and",
            "phonetic": "/ˈænd/"
        },
        {
            "text": "water",
            "phonetic": "/wˈɔːtɐ/"
        }
    ]
}"
  