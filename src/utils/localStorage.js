import { getDateInDDMMYY } from './dates';

function getLocalUserData() {
    const localUserData = localStorage.getItem('gratibox');
    if (localUserData) {
        return JSON.parse(localUserData);
    }
    return {
        login: '',
        plan: '',
        subscriptionDate: '',
        products: [],
        deliverDate: '',
        token: '',
    };
}

function saveSubscriptionLocally(subscriptionData) {
    const adjustedSubscriptionDate = {
        ...subscriptionData,
        subscriptionDate: getDateInDDMMYY(subscriptionData.subscriptionDate),
    };
    localStorage.setItem('gratibox', JSON.stringify(adjustedSubscriptionDate));
    return adjustedSubscriptionDate;
}

function saveTokenAndNameLocally({ token, login }) {
    const subscriptionData = {
        plan: '',
        subscriptionDate: '',
        products: [],
        deliverDate: '',
        token,
        login,
    };
    localStorage.setItem('gratibox', JSON.stringify(subscriptionData));
    return subscriptionData;
}

export {
    getLocalUserData,
    saveSubscriptionLocally,
    saveTokenAndNameLocally,
};
