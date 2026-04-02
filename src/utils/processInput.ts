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
export function processInput(text: string) {
    // convert to upper case and remove everything but letters, replace J with I
    const filtered_text = text.toUpperCase().replace(/[^A-Z]/g, '').replaceAll("J","I");

    // if letter at odd index followed by a duplicate, insert letter 'X'; unless the letter is 'X', in which case insert 'Q' instead
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

    // if odd length, add X to end; unless the last letter is already an X, in which case add a Q instead
    if (result.length % 2 != 0 && result[result.length - 1] != 'X') {
        result += 'X';
    } else if (result.length % 2 != 0) {
        result += 'Q';
    }
    
    // break into digrams
    return digramify(result);
}