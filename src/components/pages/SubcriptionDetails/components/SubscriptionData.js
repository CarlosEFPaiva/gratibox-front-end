import { useContext } from 'react';
import styled from 'styled-components';

import { getNextThreeDeliveryDates } from '../SubscriptionDetailsFunctions';

import UserDataContext from '../../../../contexts/UserDataContext';
import UserProducts from './UserProducts';

export default function SubscriptionData() {
    const { userData } = useContext(UserDataContext);
    const dataToPrint = [
        { key: 'SubscriptionDetails 1', type: 'Plano', data: <span>{userData.plan}</span> },
        { key: 'SubscriptionDetails 2', type: 'Data da assinatura', data: <span>{userData.subscriptionDate}</span> },
        { key: 'SubscriptionDetails 3', type: 'Próximas entregas', data: getNextThreeDeliveryDates(userData.plan, userData.deliverDate) },
    ];
    return (
        <Wrapper>
            {
                dataToPrint.map(({ key, type, data }) => (
                    <Info key={key}>
                        {`${type}: `}
                        {data}
                    </Info>
                ))
            }
            <UserProducts />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 24px 24px 10px;
    display: flex;
    flex-direction: column;
`;

const Info = styled.span`
    display: inline-block;
    margin-bottom: 6px;
    font-size: 18px;
    line-height: 24px;
    color: #4D65A8;
    & span {
        color: #E63C80;
    }
    & div {
        margin-left: 30px;
    }
`;
