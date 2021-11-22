import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageTitle from '../../shared/PageTitle';
import FormTemplate from '../../shared/FormTemplate';
import UnderButtonMessage from '../../shared/UnderButtonMessage';
import { validateAndSendSignUpValues } from './SignUpFunctions';

export default function SignUp() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [inputValues, setInputValues] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const inputs = [
        { key: 'SignIn Input 1', name: 'Nome', type: 'text', value: inputValues.name, onChange: (e) => setInputValues({ ...inputValues, name: e.target.value }) },
        { key: 'SignIn Input 2', name: 'Email', type: 'text', value: inputValues.email, onChange: (e) => setInputValues({ ...inputValues, email: e.target.value }) },
        { key: 'SignIn Input 3', name: 'Senha', type: 'password', value: inputValues.password, onChange: (e) => setInputValues({ ...inputValues, password: e.target.value }) },
        { key: 'SignIn Input 4', name: 'Confirmar senha', type: 'password', value: inputValues.confirmPassword, onChange: (e) => setInputValues({ ...inputValues, confirmPassword: e.target.value }) },
    ];
    return (
        <Wrapper>
            <PageTitle fontSize="28px" marginBottom="42px">
                Bem vindo ao Gratibox
            </PageTitle>
            <FormTemplate
                inputs={inputs}
                buttonText="Cadastrar"
                buttonMarginTop="54px"
                isLoading={isLoading}
                onSubmit={
                    (e) => validateAndSendSignUpValues(e, inputValues, navigate, setIsLoading)
                }
            />
            <UnderButtonMessage onClick={() => navigate('/signin')}>
                Já sou grato
            </UnderButtonMessage>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6D7CE4;
`;
