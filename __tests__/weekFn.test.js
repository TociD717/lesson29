import { weekFn } from "../weekFn";

describe('Testing function weekFn', () => {
    it(' 1 = Понеділок', () => {
    expect(weekFn(1)).toBe('Понеділок');
    })
    it(' 3 = Середа', () => {
        expect(weekFn(3)).toBe('Середа');
        })
    it(' 7 = Неділя', () => {
    expect(weekFn(7)).toBe('Неділя');
    })
    it(' 9 = null', () => {
        expect(weekFn(9)).toBe(null);
    })
    it(' 1.5 = null', () => {
        expect(weekFn(1.5)).toBe(null);
    })
    it(' \'2\' = null', () => {
            expect(weekFn('2')).toBe(null);
    })
});