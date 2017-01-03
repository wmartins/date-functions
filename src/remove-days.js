export default function removeDays(base, n = 0) {
    const target = new Date(base.getTime());

    target.setDate(target.getDate() - n);

    return target;
}
