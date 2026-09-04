import { describe, it, expect } from 'vitest';

describe('System health checking', () => {
    describe('ping', () => {
        it('should return pong', () => {
            expect(true).toBe(true);
        })
    })

    describe('should return simple true add function', () => {
        it('should return 3', () => {
            expect(add(1, 2)).toBe(3);
        })
    })
});

function add(a: number, b: number) {
    return a + b;
}
