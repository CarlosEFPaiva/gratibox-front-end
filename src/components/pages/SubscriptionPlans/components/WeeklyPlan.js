import styled from 'styled-components';

import ExamplePicture from '../../../../assets/imgs/image04.png';
import Buttons from './Buttons';

export default function WeeklyPlan() {
    return (
        <Wrapper>
            <img alt="Medidating Lady" src={ExamplePicture} />
            <Description>
                Você recebe um box por semana.
                <br />
                Ideal para quem quer exercer a gratidão todos os dias.
            </Description>
            <Buttons plan="Weekly" />
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
