export default function formatDateTimestamp(timestamp) {
    const date = new Date(timestamp)
    return `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`;
}