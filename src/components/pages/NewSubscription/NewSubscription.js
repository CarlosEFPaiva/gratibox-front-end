import styled from 'styled-components';
import ForwardButton from '../../shared/ForwardButton';
import LoggedInUpperText from '../../shared/LoggedInUpperText';
import DescriptionBox from './components/NewSubscriptionBox';

export default function NewSubscription() {
    return (
        <Wrapper>
            <LoggedInUpperText isSubscribed />
            <DescriptionBox />
            <ForwardButton
                width="202px"
                height="39px"
                fontSize="24px"
                marginTop="8px"
            >
                Próximo
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
