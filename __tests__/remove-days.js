const dfn = require('../');

const { removeDays } = dfn;

const regularYear = 2001;
const leapYear = 2000;

test('removeDays should be able to add 1 day', () => {
    const baseDate = new Date(regularYear, 0, 2);

    expect(removeDays(baseDate, 1).getDate()).toBe(1);
});

test('removeDays should be able to remove 2 or more days', () => {
    const baseDate = new Date(regularYear, 0, 9);

    expect(removeDays(baseDate, 2).getDate()).toBe(7);
    expect(removeDays(baseDate, 4).getDate()).toBe(5);
    expect(removeDays(baseDate, 8).getDate()).toBe(1);
});

test('removeDays should handle correct removing days in regular years', () => {
    const baseDate = new Date(regularYear, 2, 1);

    const prevMonth = removeDays(baseDate, 1);
    expect(prevMonth.getMonth()).toBe(1);
    expect(prevMonth.getDate()).toBe(28);
});

test('removeDays should handle correct removing days in leap years', () => {
    const baseDate = new Date(leapYear, 2, 1);

    expect(removeDays(baseDate, 1).getDate()).toBe(29);

    const prevMonth = removeDays(baseDate, 2);
    expect(prevMonth.getMonth()).toBe(1);
    expect(prevMonth.getDate()).toBe(28);
});
