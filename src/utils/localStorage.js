function getLocalUserData() {
    const localUserData = localStorage.getItem('gratibox');
    if (localUserData) {
        return JSON.parse(localUserData);
    }
    return { firstName: 'Carlos', subscriptionPlan: 'Mensal', subscriptionDate: '19/11/2021', products: ['Chás', 'Produtos Organicos', 'Incensos'], receivingDate: 20 };
}

function saveLocalUserData(userData) {
    localStorage.setItem('gratibox', JSON.stringify(userData));
}

export {
    getLocalUserData,
    saveLocalUserData,
};
