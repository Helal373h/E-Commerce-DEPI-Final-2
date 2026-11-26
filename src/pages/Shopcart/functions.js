export function formatPrice(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return "";

    const hasFraction = !Number.isInteger(num);
    const [intPart, decPart] = Math.abs(num)
        .toFixed(hasFraction ? 2 : 0)
        .split(".");

    const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const sign = num < 0 ? "-" : "";

    return `${sign}$${grouped}${decPart ? "." + decPart : ""}`;
}
