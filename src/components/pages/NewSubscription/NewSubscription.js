import { useContext, useState } from 'react';
import styled from 'styled-components';
import NewSubscriptionContext from '../../../contexts/NewSubscriptionContext';
import ForwardButton from '../../shared/ForwardButton';
import LoggedInUpperText from '../../shared/LoggedInUpperText';
import DeliveryInformationBox from './components/DeliveryInformationBox';
import NewPlanDescriptionBox from './components/NewPlanDescriptionBox';
import { goForward } from './NewSubscriptionFunctions';

export default function NewSubscription() {
    const [isFirstPage, setIsFirstPage] = useState(true);
    const { newSubscriptionData } = useContext(NewSubscriptionContext);
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
                onClick={() => goForward(newSubscriptionData, isFirstPage, setIsFirstPage)}
            >
                {isFirstPage ? 'Próximo' : 'Finalizar'}
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
