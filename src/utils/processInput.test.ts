import { describe, it, expect } from 'vitest';
import { processInput } from './processInput';

describe('processInput', () => {
    it('converts to uppercase', () => {
        expect(processInput('this')).toBe('THIS');
        expect(processInput('that')).toBe('THAT');
    })

    it('removes spaces and punctuation', () => {
        expect(processInput('hey, there!')).toBe('HEYTHERE');
        expect(processInput('!!!')).toBe('');
        expect(processInput('y e a h')).toBe('YEAH');
    })

    it('converts "J" to "I"', () => {
        expect(processInput('jump')).toBe('IUMP');
        expect(processInput('jejune')).toBe('IEIUNE');
    })

    it('adds an "X" between same letters in digraph positions, or "Q" between paired "X" letters', () => {
        expect(processInput('hello')).toBe('HELXLO');
        expect(processInput('balloon')).toBe('BALXLOON');
        expect(processInput('xxtra')).toBe('XQXTRA');
    })

    it('adds an "X" to the end of odd-length strings, or "Q" if the last letter is "X"', () => {
        expect(processInput('hey')).toBe('HEYX');
        expect(processInput('i')).toBe('IX');
        expect(processInput('max')).toBe('MAXQ');
    })
})