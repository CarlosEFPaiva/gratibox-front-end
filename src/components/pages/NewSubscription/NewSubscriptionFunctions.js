import { sendErrorAlert } from '../../../utils/sweetAlert';

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

function inputUpdate(e, atribute, newSubscriptionData, setNewSubscriptionData) {
    const newObject = { ...newSubscriptionData };
    newObject[atribute] = e.target.value;
    setNewSubscriptionData(newObject);
}

function areInputsValid(newSubscriptionData, isFirstPage) {
    if (isFirstPage) {
        if (!newSubscriptionData.plan) return sendErrorAlert('Selecione uma opção de plano!');
        if (!newSubscriptionData.deliverDate) return sendErrorAlert('Selecione uma data para entrega!');
        if (!newSubscriptionData.products.length) return sendErrorAlert('Selecione ao menos um produto para envio!');
    } else {
        return '';
    }
    return '';
}

function goForward(newSubscriptionData, isFirstPage, setIsFirstPage) {
    if (areInputsValid(newSubscriptionData, isFirstPage)) {
        if (isFirstPage) {
            return setIsFirstPage(false);
        }
        return '';
    }
    return '';
}

export {
    openNewSubscriptionMenu,
    checkOption,
    inputUpdate,
    goForward,
};
