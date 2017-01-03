const dfn = require('../');

const { addDays } = dfn;

const regularYear = 2001;
const leapYear = 2000;

test('addDays should be able to add 1 day', () => {
    const baseDate = new Date(regularYear, 0, 1);

    expect(addDays(baseDate, 1).getDate()).toBe(2);
});

test('addDays should be able to add 2 or more days', () => {
    const baseDate = new Date(regularYear, 0, 1);

    expect(addDays(baseDate, 2).getDate()).toBe(3);
    expect(addDays(baseDate, 4).getDate()).toBe(5);
    expect(addDays(baseDate, 8).getDate()).toBe(9);
});

test('addDays should handle correct adding days in regular years', () => {
    const baseDate = new Date(regularYear, 1, 28);

    const nextMonth = addDays(baseDate, 1);
    expect(nextMonth.getMonth()).toBe(2);
    expect(nextMonth.getDate()).toBe(1);
});

test('addDays should handle correct adding days in leap years', () => {
    const baseDate = new Date(leapYear, 1, 28);

    expect(addDays(baseDate, 1).getDate()).toBe(29);

    const nextMonth = addDays(baseDate, 2);
    expect(nextMonth.getMonth()).toBe(2);
    expect(nextMonth.getDate()).toBe(1);
});
