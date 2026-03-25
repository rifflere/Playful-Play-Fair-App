export function processInput(text: string) {
    // convert to upper case and remove everything but letters, replace J with I
    const filtered_text = text.toUpperCase().replace(/[^A-Z]/g, '').replaceAll("J","I");

    // if letter at odd index followed by a duplicate, insert letter 'X'
    let result = "";
    let i = 0;

    while (i < filtered_text.length) {
        result += filtered_text[i];
        if (filtered_text[i] == filtered_text[i+1] && (result.length % 2 == 1)) {
            result += 'X';
        }
        i++;
    } 

    // if odd length, add X to end
    if (result.length % 2 != 0) result += 'X';

    return result;
}