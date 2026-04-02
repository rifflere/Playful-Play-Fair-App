import type { ProcessResult } from '../types';

// This helper function turns a string into digrams, without processing the input according to the rules of the Playfair cipher
export function digramify(text: string) {
    const digrams = [];
    for (let i = 0; i < text.length; i += 2) {
        digrams.push(text.substring(i, i + 2));
    }

    return digrams.join(' ');
}

// This function processes the input according to the rules of the Playfair cipher:
// 1. Convert to uppercase and remove everything but letters, replace J with I
// 2. If a digram has the same letter twice, insert an "X" between them. (If the double letters are "X", insert a "Q" instead.)
// 3. If the message has an odd number of letters, add an "X" at the end. (If the last letter is "X", insert a "Q" instead.)
export function processEncrypt(text: string): ProcessResult {
    const filtered_text = text.toUpperCase().replace(/[^A-Z]/g, '').replaceAll("J","I");

    let result = "";
    let i = 0;
    while (i < filtered_text.length) {
        result += filtered_text[i];

        if (filtered_text[i] == filtered_text[i+1] && filtered_text[i] != 'X' && (result.length % 2 == 1)) {
            result += 'X';
        } else if (filtered_text[i] == filtered_text[i+1] && (result.length % 2 == 1)) {
            result += 'Q';
        }

        i++;
    } 

    if (result.length % 2 != 0 && result[result.length - 1] != 'X') {
        result += 'X';
    } else if (result.length % 2 != 0) {
        result += 'Q';
    }
    
    return { isValid: true, processedText: digramify(result) };
}

export function processDecrypt(text: string) : ProcessResult {
    const result = text.toUpperCase().replace(/[^A-Z]/g, '');

    if (result.length % 2 != 0) {
        return { isValid: false, error: "Input must have an even number of letters" };
    }
 
    for (let i = 0; i < result.length; i += 2) {
        if (result[i] == result[i+1]) {
            return { isValid: false, error: "Input contains double-letter digrams" };
        }
    }
    
    return { isValid: true, processedText: digramify(result) };
}

export function encrypt(text: string, keyGrid: string[]) {

    // convert key into into an object mapping letters to their coordinates in the grid <- consider turning this into helper function
    // process each digram in the input according to the rules of the Playfair cipher, using the key grid for reference
    // return the resulting string

    return text;
}

export function decrypt(text: string, keyGrid: string[]) {
    return text;
}