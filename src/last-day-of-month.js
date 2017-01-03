export default function lastDayOfMonth(base) {
    const target = new Date(base.getTime());

    target.setMonth(target.getMonth() + 1);
    target.setDate(0);

    return target;
}
