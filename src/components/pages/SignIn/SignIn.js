import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageTitle from '../../shared/PageTitle';
import FormTemplate from '../../shared/FormTemplate';
import UnderButtonMessage from '../../shared/UnderButtonMessage';
import { validateInputsAndSendRequest } from './SignInFunctions';
import UserDataContext from '../../../contexts/UserDataContext';

export default function SignIn() {
    const navigate = useNavigate();
    const { setUserData } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValues, setInputValues] = useState({ email: '', password: '' });
    const inputs = [
        { key: 'SignIn Input 1', name: 'Email', type: 'text', value: inputValues.email, onChange: (e) => setInputValues({ ...inputValues, email: e.target.value }) },
        { key: 'SignIn Input 2', name: 'Senha', type: 'password', value: inputValues.password, onChange: (e) => setInputValues({ ...inputValues, password: e.target.value }) },
    ];
    return (
        <Wrapper>
            <PageTitle fontSize="28px" marginBottom="42px">
                Bem vindo ao Gratibox
            </PageTitle>
            <FormTemplate
                inputs={inputs}
                buttonText="Login"
                buttonMarginTop="136px"
                isLoading={isLoading}
                onSubmit={
                    (e) => validateInputsAndSendRequest(
                        e,
                        inputValues,
                        setUserData,
                        setIsLoading,
                        navigate,
                    )
                }
            />
            <UnderButtonMessage onClick={() => navigate('/signup')}>
                Ainda não sou grato
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
