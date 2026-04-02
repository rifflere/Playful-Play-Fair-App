import { describe, it, expect } from 'vitest';
import { processInput } from './processInput';

describe('processInput', () => {
    it('breaks input into digrams', () => {
        expect(processInput('playfair')).toBe('PL AY FA IR');
    })

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