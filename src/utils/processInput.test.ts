import { describe, it, expect } from 'vitest';
import { digramify, processEncrypt, encrypt, decrypt } from './processInput';

describe('digramify', () => {
    it('breaks input into digrams', () => {
        expect(digramify('playfair')).toBe('pl ay fa ir');
    })
});

describe('processInput', () => {
    it('converts to uppercase', () => {
        expect(processEncrypt('this')).toBe('TH IS');
        expect(processEncrypt('that')).toBe('TH AT');
    })

    it('removes spaces and punctuation', () => {
        expect(processEncrypt('hey, there!')).toBe('HE YT HE RE');
        expect(processEncrypt('!!!')).toBe('');
        expect(processEncrypt('y e a h')).toBe('YE AH');
    })

    it('converts "J" to "I"', () => {
        expect(processEncrypt('jump')).toBe('IU MP');
        expect(processEncrypt('jejune')).toBe('IE IU NE');
    })

    it('adds an "X" between same letters in digraph positions, or "Q" between paired "X" letters', () => {
        expect(processEncrypt('hello')).toBe('HE LX LO');
        expect(processEncrypt('balloon')).toBe('BA LX LO ON');
        expect(processEncrypt('xxtra')).toBe('XQ XT RA');
    })

    it('adds an "X" to the end of odd-length strings, or "Q" if the last letter is "X"', () => {
        expect(processEncrypt('hey')).toBe('HE YX');
        expect(processEncrypt('i')).toBe('IX');
        expect(processEncrypt('max')).toBe('MA XQ');
    })
})

describe('encrypt', () => {
    it('encrypts input with the given key', () => {
        expect(encrypt('hello', ['A'])).toBe('');
    })
});

describe('decrypt', () => {
    it('deciphers input with the given key', () => {
        expect(decrypt('hello', ['A'])).toBe('');
    })
});