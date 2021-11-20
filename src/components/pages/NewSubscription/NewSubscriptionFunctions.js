function openNewSubscriptionMenu(setMenuActivity, menuIndex) {
    const newMenuActivity = [false, false, false];
    newMenuActivity[menuIndex] = true;
    setMenuActivity(newMenuActivity);
}

function checkOption(atribute, item, newSubscriptionData, setNewSubscriptionData) {
    let updatedAtribute;
    if (atribute !== 'products') {
        updatedAtribute = item;
    } else {
        updatedAtribute = [...newSubscriptionData.products];
        const itemIndex = updatedAtribute.indexOf(item);
        if (itemIndex === -1) {
            updatedAtribute.push(item);
        } else {
            updatedAtribute.splice(itemIndex, 1);
        }
    }
    const updatedObject = { ...newSubscriptionData };
    updatedObject[atribute] = updatedAtribute;
    setNewSubscriptionData(updatedObject);
}

export {
    openNewSubscriptionMenu,
    checkOption,
};
