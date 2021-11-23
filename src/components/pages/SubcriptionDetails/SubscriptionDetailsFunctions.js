import { getDateInDDMMYY } from '../../../utils/dates';

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
    const possibleChosenDays = ['Segunda', 'Quarta', 'Sexta', 'Dia 1°', 'Dia 10', 'Dia 20'];
    const compatibleChosenDayNumber = [1, 3, 5, 1, 10, 20];
    const adjustedDay = compatibleChosenDayNumber[possibleChosenDays.indexOf(chosenDayOfDeliver)];
    const today = new Date();
    const desiredDates = [];
    let nextDate = new Date(today);
    for (let i = 0; i < 3; i++) {
        if (typeOfSubscription === 'Mensal') {
            nextDate = getNextSelectedDate(nextDate, adjustedDay);
        } else {
            nextDate = getNextSelectedWeekDay(nextDate, adjustedDay);
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
