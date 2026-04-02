import { describe, it, expect } from 'vitest';
import { digramify, processInput, encrypt, decipher } from './processInput';

describe('digramify', () => {
    it('breaks input into digrams', () => {
        expect(digramify('playfair')).toBe('pl ay fa ir');
    })
});

describe('processInput', () => {
    it('converts to uppercase', () => {
        expect(processInput('this')).toBe('TH IS');
        expect(processInput('that')).toBe('TH AT');
    })

    it('removes spaces and punctuation', () => {
        expect(processInput('hey, there!')).toBe('HE YT HE RE');
        expect(processInput('!!!')).toBe('');
        expect(processInput('y e a h')).toBe('YE AH');
    })

    it('converts "J" to "I"', () => {
        expect(processInput('jump')).toBe('IU MP');
        expect(processInput('jejune')).toBe('IE IU NE');
    })

    it('adds an "X" between same letters in digraph positions, or "Q" between paired "X" letters', () => {
        expect(processInput('hello')).toBe('HE LX LO');
        expect(processInput('balloon')).toBe('BA LX LO ON');
        expect(processInput('xxtra')).toBe('XQ XT RA');
    })

    it('adds an "X" to the end of odd-length strings, or "Q" if the last letter is "X"', () => {
        expect(processInput('hey')).toBe('HE YX');
        expect(processInput('i')).toBe('IX');
        expect(processInput('max')).toBe('MA XQ');
    })
})

describe('encrypt', () => {
    it('encrypts input with the given key', () => {
        expect(encrypt('hello', 'key')).toBe('');
    })
});

describe('decipher', () => {
    it('deciphers input with the given key', () => {
        expect(decipher('hello', 'key')).toBe('');
    })
});