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
  // TODO: Implement this by calling an API.

  return {
    phonetic: [
      {
        text: 'i',
        phonetic: '/ˈa‍ɪ/'
      },
      {
        text: 'am',
        phonetic: 'am'
      },
      {
        text: 'the',
        phonetic: '/ðə, ði/'
      },
      {
        text: 'boy',
        phonetic: '/bˈɔ‍ɪ/'
      },
      {
        text: 'here',
        phonetic: '/hˈi‍ə/'
      },
      {
        text: 'your',
        phonetic: '/jˈɔː/'
      },
      {
        text: 'power',
        phonetic: '/pˈa‍ʊɐ/'
      },
      {
        text: 'a',
        phonetic: 'a'
      },
      {
        text: 'tree',
        phonetic: '/tɹˈiː/'
      },
      {
        text: 'and',
        phonetic: '/ˈænd/'
      },
      {
        text: 'water',
        phonetic: '/wˈɔːtɐ/'
      }
    ]
  };
}
