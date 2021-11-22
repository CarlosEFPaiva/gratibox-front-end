import api from '../../../service/api';
import { saveSubscriptionLocally, saveTokenAndNameLocally } from '../../../utils/localStorage';
import { sendErrorAlert } from '../../../utils/sweetAlert';

function areInputsValid(signInData) {
    const { email, password } = signInData;
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!isEmailValid.test(email.toLowerCase())) {
        sendErrorAlert('Por favor, digite um email válido');
        return false;
    }

    if (!isPasswordValid.test(password)) {
        sendErrorAlert('Sua senha está incorreta! Lembre-se de que ela contém no mínimo:<br>8 caracteres<br>1 letra maiúscula<br>1 letra minúscula<br>1 número<br>1 caracter especial (@$!%*?&)');
        return false;
    }
    return true;
}

function validateInputsAndSendRequest(e, signInData, setUserData, setIsLoading, navigate) {
    e.preventDefault();
    if (areInputsValid(signInData)) {
        setIsLoading(true);
        api.signin(signInData)
            .then((res) => {
                setIsLoading(false);
                if (res.data.plan) {
                    setUserData(saveSubscriptionLocally(res.data));
                    return navigate('/subscription-details');
                }
                setUserData(saveTokenAndNameLocally(res.data));
                return navigate('/subscription-plans');
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    return sendErrorAlert('Parece que houve algum problema com a validação dos dados. Tente novamente!');
                }
                if (error.response.status === 401) {
                    return sendErrorAlert('Parece que seus dados de email e senhão não conferem. Tente novamente!');
                }
                return sendErrorAlert('Parece que houve algum problema com o servidor. Tente novamente mais tarde!');
            });
    }
}

export {
    validateInputsAndSendRequest,
};
