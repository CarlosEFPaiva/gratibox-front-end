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

function validateInputsAndSendRequest(e, signInData) {
    e.preventDefault();
    if (areInputsValid(signInData)) {
        console.log('To be Done');
    }
}

export default validateInputsAndSendRequest;
