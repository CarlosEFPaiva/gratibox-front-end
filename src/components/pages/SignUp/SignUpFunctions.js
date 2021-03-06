import api from '../../../service/api';
import { sendErrorAlert, sendSuccessAlert } from '../../../utils/sweetAlert';

function checkRawRegistrationValues(signUpData) {
    const { name, email, password, confirmPassword } = signUpData;
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name.length < 3 || name.length > 20) {
        sendErrorAlert('Seu nome deve ter entre 3 e 20 caracteres!');
        return false;
    }

    if (!isEmailValid.test(email.toLowerCase())) {
        sendErrorAlert('Por favor, digite um email válido');
        return false;
    }

    if (!isPasswordValid.test(password)) {
        sendErrorAlert('Sua senha deve conter no mínimo:<br>8 caracteres<br>1 letra maiúscula<br>1 letra minúscula<br>1 número<br>1 caracter especial (@$!%*?&)');
        return false;
    }
    if (password !== confirmPassword) {
        sendErrorAlert('Sua senha não está igual à digitada no campo de confirmação, tente novamente');
        return false;
    }
    return true;
}

function validateAndSendSignUpValues(event, signUpData, navigate, setIsLoading) {
    event.preventDefault();
    if (checkRawRegistrationValues(signUpData)) {
        const requestBody = { ...signUpData };
        delete requestBody.confirmPassword;
        setIsLoading(true);
        api.signup(requestBody)
            .then(async () => {
                setIsLoading(false);
                await sendSuccessAlert('Cadastro realizado com sucesso!');
                navigate('/signin');
            })
            .catch((error) => {
                setIsLoading(false);
                if (error.response.status === 409) {
                    return sendErrorAlert('Parece que este email já está cadastrado! Tente fazer login');
                }
                return sendErrorAlert('Parece que houve algum erro no servidor! Tente novamente mais tarde');
            });
    }
}

export {
    validateAndSendSignUpValues,
};
