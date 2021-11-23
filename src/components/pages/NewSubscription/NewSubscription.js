import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NewSubscriptionContext from '../../../contexts/NewSubscriptionContext';
import UserDataContext from '../../../contexts/UserDataContext';
import { LoadingDots } from '../../../utils/reactLoader';
import ForwardButton from '../../shared/ForwardButton';
import LoggedInUpperText from '../../shared/LoggedInUpperText';
import DeliveryInformationBox from './components/DeliveryInformationBox';
import NewPlanDescriptionBox from './components/NewPlanDescriptionBox';
import { goForward } from './NewSubscriptionFunctions';

export default function NewSubscription() {
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const { userData, setUserData } = useContext(UserDataContext);
    const { newSubscriptionData } = useContext(NewSubscriptionContext);
    const buttonText = isFirstPage ? 'Próximo' : 'Finalizar';
    const navigate = useNavigate();
    return (
        <Wrapper>
            <LoggedInUpperText isSubscribed />
            <NewPlanDescriptionBox isShown={isFirstPage} />
            <DeliveryInformationBox isShown={!isFirstPage} />
            <ForwardButton
                width="202px"
                height="39px"
                fontSize="24px"
                marginTop="8px"
                disabled={isLoading}
                onClick={() => goForward(
                    newSubscriptionData,
                    isFirstPage,
                    setIsFirstPage,
                    setIsLoading,
                    userData,
                    setUserData,
                    navigate,
                )}
            >
                { isLoading ? <LoadingDots /> : buttonText }
            </ForwardButton>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 24px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6D7CE4;
`;
