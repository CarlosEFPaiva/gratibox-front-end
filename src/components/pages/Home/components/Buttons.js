import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ForwardButton from '../../../shared/ForwardButton';
import UnderButtonMessage from '../../../shared/UnderButtonMessage';

export default function Buttons() {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <ForwardButton width="202px" height="45px" fontSize="18px" onClick={() => navigate('/signup')}>
                Quero começar
            </ForwardButton>
            <UnderButtonMessage onClick={() => navigate('/signin')}>
                Já sou grato
            </UnderButtonMessage>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
