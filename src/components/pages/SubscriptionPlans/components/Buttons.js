import { useContext } from 'react';
import styled from 'styled-components';

import OptionsRefContext from '../../../../contexts/OptionsRefContext';

import ForwardButton from '../../../shared/ForwardButton';

import { scrollPlansHorizontally } from '../SubscriptionPlansFunctions';

export default function Buttons({ plan }) {
    const divOptionsRef = useContext(OptionsRefContext);
    const buttonData = plan === 'Weekly' ? { text: 'Ver plano mensal', scroll: 'right' } : { text: 'Ver plano semanal', scroll: 'left' };
    return (
        <Wrapper>
            <ForwardButton width="168px" height="39px" fontSize="24px">
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
