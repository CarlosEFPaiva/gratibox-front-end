import styled from 'styled-components';

import ExamplePicture from '../../../../assets/imgs/image03.png';
import SubscriptionData from './SubscriptionData';

export default function DescriptionBox() {
    return (
        <Wrapper>
            <img alt="Medidating Lady" src={ExamplePicture} />
            <SubscriptionData />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    min-width: calc(100vw - 16px);
    margin: 0px 8px;
    background-color: #FFFFFF;
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
