import styled from 'styled-components';

import Logo from '../../../assets/imgs/image05.png';
import UpperText from './components/UpperText';
import Buttons from './components/Buttons';

export default function Homepage() {
    return (
        <>
            <UpperBackground />
            <Wrapper>
                <UpperText />
                <img alt="Gratibox Logo" src={Logo} />
                <Buttons />
            </Wrapper>
            <LowerBackground />
        </>
    );
}

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    & img {
        width: 100vw;
        height: 100vw;
    }
`;

const UpperBackground = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #6D7CE4;
`;

const LowerBackground = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #4D65A8;
`;
