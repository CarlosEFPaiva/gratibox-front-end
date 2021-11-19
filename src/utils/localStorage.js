function getLocalUserData() {
    const localUserData = localStorage.getItem('gratibox');
    if (localUserData) {
        return JSON.parse(localUserData);
    }
    return { firstName: 'Carlos', subscriptionPlan: '', subscriptionDate: '', products: [], receivingDate: '' };
}

function saveLocalUserData(userData) {
    localStorage.setItem('gratibox', JSON.stringify(userData));
}

export {
    getLocalUserData,
    saveLocalUserData,
};
