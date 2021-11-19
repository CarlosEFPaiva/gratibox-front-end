import styled from 'styled-components';

import UpperText from './components/UpperText';
import AvailablePlans from './components/AvailablePlans';

export default function SubscriptionPlans() {
    return (
        <Wrapper>
            <UpperText />
            <AvailablePlans />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    padding: 24px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6D7CE4;
`;
