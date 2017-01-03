export default function firstDayOfMonth(base) {
    const target = new Date(base.getTime());

    target.setDate(1);

    return target;
}
