const CAREER_PERIODS = [
    {
        start: new Date(2021, 11, 31),
        end: new Date(2025, 7, 31),
    },
    {
        start: new Date(2025, 10, 1),
        end: null,
    },
];

function getCompleteMonths(start, end) {
    let months =
        (end.getFullYear() - start.getFullYear()) * 12
        + end.getMonth()
        - start.getMonth();

    if (end.getDate() < start.getDate()) {
        months -= 1;
    }

    return Math.max(0, months);
}

export function getCareerSummary(referenceDate = new Date()) {
    const totalMonths = CAREER_PERIODS.reduce((sum, period) => {
        if (referenceDate < period.start) return sum;

        const periodEnd = period.end && period.end < referenceDate
            ? period.end
            : referenceDate;

        return sum + getCompleteMonths(period.start, periodEnd);
    }, 0);

    return {
        years: Math.floor(totalMonths / 12),
        months: totalMonths % 12,
        yearNumber: Math.floor(totalMonths / 12) + 1,
    };
}

export function formatCareerDuration(referenceDate = new Date()) {
    const { years, months } = getCareerSummary(referenceDate);

    if (years === 0) return `${months}개월`;
    if (months === 0) return `${years}년`;
    return `${years}년 ${months}개월`;
}
