const dfn = require('../');

const { firstDayOfMonth } = dfn;

const year = 2000;

test('firstDayOfMonth should always return day 1', () => {
    Array(12).fill(0).forEach((_, month) => {
        const baseDate = new Date(year, month, 10);

        expect(firstDayOfMonth(baseDate).getDate()).toBe(1);
    });
});
