import styled from 'styled-components';

import ExamplePicture from '../../../../assets/imgs/image02.png';
import Buttons from './Buttons';

export default function MonthlyPlan() {
    return (
        <Wrapper>
            <img alt="Medidating Lady" src={ExamplePicture} />
            <Description>
                Você recebe um box por mês.
                <br />
                Ideal para quem está começando agora.
            </Description>
            <Buttons plan="Monthly" />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    min-width: calc(100vw - 16px);
    padding-bottom: 24px;
    margin: 0px 8px;
    background-color: #E5CDB3;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    & img {
        width: 100%;
        height: 50vw;
        object-fit: cover;
        border-radius: 25px 25px 0px 0px;
    }
`;

const Description = styled.span`
    width: 100%;
    padding: 20px 24px 40px;
    font-size: 18px;
    line-height: 22px;
    color: #4D65A8;
`;
