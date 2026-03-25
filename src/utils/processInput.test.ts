import { describe, it, expect } from 'vitest';
import { processInput } from './processInput';

describe('processInput', () => {
    it('converts to uppercase', () => {
        expect(processInput('this')).toBe('THIS');
    })

    it('removes spaces and punctuation', () => {
        expect(processInput('hey, there!')).toBe('HEYTHERE');
    })

    // TESTS PLANNED
    // 'hello' -> 'HELXLO' // one double letter
    // 'jump' -> 'IUMP' // handles J -> I conversion
    // 'balloon' -> 'BALXLOON' // two double letters
    // 'hi' -> 'HI' // 2-letter uppercase
    // '' -> '' // handles empty string
    // '1a2b' -> 'AB' // removes numbers
    // '' -> '' removes spaces and punctuation
})