import { getFullYear, getFooterCopy, getLatestNotification } from  './utils';

test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
})

describe('getFooterCopy', () => {
    test('returns "Holberton School" when argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" when argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
})


test('getLatestNotification returns "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    expect(getLatestNotification()).toBe(`<strong>Urgent requirement</strong> - complete by EOD`);
});