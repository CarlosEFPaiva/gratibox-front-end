function getDateInDDMMYY(date) {
    const [day, month, year] = [
        String(date.getDate()),
        String(date.getMonth() + 1),
        String(date.getFullYear() % 100),
    ];
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
}

function getNextSelectedWeekDay(fromDate, selectedWeekDay) {
    const desiredDate = new Date(fromDate);
    desiredDate.setDate(
        desiredDate.getDate() + (((selectedWeekDay + 7 - desiredDate.getDay()) % 7) || 7),
    );
    return desiredDate;
}

function getNextSelectedDate(fromDate, selectedDate) {
    let desiredDate = new Date(fromDate);
    if (fromDate.getDate() < selectedDate) {
        desiredDate = new Date(desiredDate.setDate(selectedDate));
    } else {
        desiredDate = new Date(desiredDate.setMonth(fromDate.getMonth() + 1, selectedDate));
    }
    if (desiredDate.getDay() === 0 || desiredDate.getDay() === 6) {
        return getNextSelectedWeekDay(desiredDate, 1);
    }
    return desiredDate;
}

function getNextThreeDeliveryDates(typeOfSubscription, chosenDayOfDeliver) {
    const today = new Date();
    const desiredDates = [];
    let nextDate = new Date(today);
    for (let i = 0; i < 3; i++) {
        if (typeOfSubscription === 'Mensal') {
            nextDate = getNextSelectedDate(nextDate, chosenDayOfDeliver);
        } else {
            nextDate = getNextSelectedWeekDay(nextDate, chosenDayOfDeliver);
        }
        desiredDates.push({ date: nextDate, key: `Delivery Date ${i + 1}` });
    }
    return (
        desiredDates.map(({ date, key }) => (
            <div key={key}>
                <span>
                    {getDateInDDMMYY(date)}
                </span>
            </div>
        ))
    );
}

export {
    getNextThreeDeliveryDates,
};
