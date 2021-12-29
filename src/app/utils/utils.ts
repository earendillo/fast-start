export function trimDate(dateAsString: string): string {
    // date format: 2021-12-29T17:16:43.949Z
    return dateAsString.replace(/T.*/, '');
}

export function trimSummary(summary: string, length: number): string {
    if (summary.length <= length) {
        return summary;
    }

    return summary.replace(/\..*/, '').slice(0, length).concat('...');
}
