import styled from 'styled-components';
import LoggedInUpperText from '../../shared/LoggedInUpperText';
import DescriptionBox from './components/DescriptionBox';

export default function SubscriptionDetails() {
    return (
        <Wrapper>
            <LoggedInUpperText isSubscribed />
            <DescriptionBox />
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
