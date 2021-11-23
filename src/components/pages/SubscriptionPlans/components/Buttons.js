import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NewSubscriptionContext from '../../../../contexts/NewSubscriptionContext';

import OptionsRefContext from '../../../../contexts/OptionsRefContext';

import ForwardButton from '../../../shared/ForwardButton';

import { scrollPlansHorizontally, startNewSubscription } from '../SubscriptionPlansFunctions';

export default function Buttons({ plan }) {
    const divOptionsRef = useContext(OptionsRefContext);
    const { newSubscriptionData, setNewSubscriptionData } = useContext(NewSubscriptionContext);
    const buttonData = plan === 'Semanal' ? { text: 'Ver plano mensal', scroll: 'right' } : { text: 'Ver plano semanal', scroll: 'left' };
    const navigate = useNavigate();
    return (
        <Wrapper>
            <ForwardButton
                width="168px"
                height="39px"
                fontSize="24px"
                onClick={() => startNewSubscription(
                    newSubscriptionData,
                    setNewSubscriptionData,
                    plan,
                    navigate,
                )}
            >
                Assinar
            </ForwardButton>
            <OtherPlanButton
                onClick={() => scrollPlansHorizontally(divOptionsRef, buttonData.scroll)}
            >
                {buttonData.text}
            </OtherPlanButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const OtherPlanButton = styled.span`
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #4D65A8;
`;
