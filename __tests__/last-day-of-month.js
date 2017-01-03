const dfn = require('../');

const { lastDayOfMonth } = dfn;

const regularYear = 2001;
const leapYear = 2000;

const lastDaysInRegularYear = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
];

// Replacing February to have 29 days
const lastDaysInLeapYear = lastDaysInRegularYear.map((v, i) =>
    i === 1 ? 29 : v
);

test('lastDayOfMonth should return the last day of month for regular years', () => {
    lastDaysInRegularYear.forEach((lastDay, month) => {
        const baseDate = new Date(regularYear, month, 1);

        expect(lastDayOfMonth(baseDate).getDate()).toBe(lastDay);
    });
});

test('lastDayOfMonth should return the last day of month for leap years', () => {
    lastDaysInLeapYear.forEach((lastDay, month) => {
        const baseDate = new Date(leapYear, month, 1);

        expect(lastDayOfMonth(baseDate).getDate()).toBe(lastDay);
    });
});
