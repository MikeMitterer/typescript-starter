import { learn } from '../../../main';

describe('Some main functions 1', () => {
    test('should say Mike2', () => {
        expect(learn.function_exports.returnMyName()).toBe('Mike');
    });
});

describe('#endsWith()', () => {
    it('should return true when the value ends with the suffix', () => {
        expect(learn.function_exports.endsWith('abcd', 'bcd')).toBe(true);
    });

    it('should return false when the value does not end with the suffix', () => {
        expect(learn.function_exports.endsWith('abcd', 'cde')).toBe(false);
    });
});
