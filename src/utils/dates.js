function getDateInDDMMYY(stringDate) {
    const date = new Date(stringDate);
    const [day, month, year] = [
        String(date.getDate()),
        String(date.getMonth() + 1),
        String(date.getFullYear() % 100),
    ];
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
}

export {
    getDateInDDMMYY,
};
