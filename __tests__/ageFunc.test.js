import { ageClassification } from "../ageFunc";

describe ('Testing function ageClassification', () => {
    it('num (-1) = null', () => {
        expect(ageClassification(-1)).toBe(null);
    });
    it('num (0) = null', () => {
        expect(ageClassification(0)).toBe(null);
    });
    it('num (1) = Дитинство', () => {
        expect(ageClassification(1)).toBe('Дитинство');
    });
    it('num (24) = Дитинство', () => {
        expect(ageClassification(24)).toBe('Дитинство');
    });
    it('num (24.01) = Молодість', () => {
        expect(ageClassification(24.01)).toBe('Молодість');
    });
    it('num (44) = Молодість', () => {
        expect(ageClassification(44)).toBe('Молодість');
    });
    it('num (44.01) = Зрілість', () => {
        expect(ageClassification(44.01)).toBe('Зрілість');
    });
    it('num (65) = Довголіття', () => {
        expect(ageClassification(65)).toBe('Зрілість');
    });
    it('num (65.1) = Довголіття', () => {
        expect(ageClassification(65.01)).toBe('Старість');
    });
    it('num (75) = Старість', () => {
        expect(ageClassification(75)).toBe('Старість');
    });
    it('num (75) = Довголіття', () => {
        expect(ageClassification(75.01)).toBe('Довголіття');
    });
    it('num (90) = Довголіття', () => {
        expect(ageClassification(90)).toBe('Довголіття');
    });
    it('num (90.1) = Рекорд', () => {
        expect(ageClassification(90.01)).toBe('Рекорд');
    });
    it('num (122) = Рекорд', () => {
        expect(ageClassification(122)).toBe('Рекорд');
    });
    it('num (122.01) = null', () => {
        expect(ageClassification(122.01)).toBe(null);
    });
    it('num (150) = null', () => {
        expect(ageClassification(150)).toBe(null);
    });
})
