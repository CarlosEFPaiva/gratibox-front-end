import api from '../../../service/api';
import { getDateInDDMMYY } from '../../../utils/dates';
import { saveSubscriptionLocally } from '../../../utils/localStorage';
import { sendErrorAlert, sendSuccessAlert } from '../../../utils/sweetAlert';

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

function areSecondPageInputsValid(inputValues) {
    const validUFs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'DO', 'MA', 'MT',
        'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const conditions = [
        { message: 'Insira um nome válido!', condition: (inputValues.name).length > 3 },
        { message: 'Insira um endereço válido!', condition: (inputValues.adress).length > 3 },
        { message: 'Insira um CEP válido!', condition: String(inputValues.zipCode).length === 8 },
        { message: 'Insira uma cidade válida!', condition: (inputValues.city).length > 3 },
        { message: 'Insira um estado válido!', condition: validUFs.includes(inputValues.state.toUpperCase()) },
    ];

    const error = conditions.find(({ condition }) => condition === false);
    if (error) {
        sendErrorAlert(error.message);
        return false;
    }
    return true;
}

function areFirstPageInputsValid(newSubscriptionData) {
    const conditions = [
        { message: 'Selecione uma opção de plano!', condition: !!newSubscriptionData.plan },
        { message: 'Selecione uma data para entrega!', condition: !!newSubscriptionData.deliverDate },
        { message: 'Selecione ao menos um produto para envio!', condition: !!newSubscriptionData.products.length },
    ];

    const error = conditions.find(({ condition }) => condition === false);
    if (error) {
        sendErrorAlert(error.message);
        return false;
    }
    return true;
}

function areInputsValid(newSubscriptionData, isFirstPage) {
    if (isFirstPage) {
        return areFirstPageInputsValid(newSubscriptionData);
    }
    return areSecondPageInputsValid(newSubscriptionData);
}

function sendSubscription(setIsLoading, newSubscriptionData, userData, setUserData, navigate) {
    setIsLoading(true);
    api.newSubscription(newSubscriptionData, userData.token)
        .then(() => {
            const today = getDateInDDMMYY(new Date());
            setIsLoading(false);
            const newUserData = {
                ...userData,
                plan: newSubscriptionData.plan,
                subscriptionDate: today,
                deliverDate: newSubscriptionData.deliverDate,
                products: newSubscriptionData.products,
            };
            saveSubscriptionLocally(newUserData);
            setUserData(newUserData);
            sendSuccessAlert('Você se inscreveu com sucesso! Muita gratidão para você!');
            navigate('/subscription-details');
        })
        .catch(() => {
            setIsLoading(false);
            sendErrorAlert('Parece que houve algum problema! Tente novamente mais tarde');
        });
}

function goForward(
    newSubscriptionData,
    isFirstPage,
    setIsFirstPage,
    setIsLoading,
    userData,
    setUserData,
    navigate,
) {
    if (areInputsValid(newSubscriptionData, isFirstPage)) {
        if (isFirstPage) {
            return setIsFirstPage(false);
        }
        return sendSubscription(setIsLoading, newSubscriptionData, userData, setUserData, navigate);
    }
    return false;
}

export {
    openNewSubscriptionMenu,
    checkOption,
    inputUpdate,
    goForward,
};
