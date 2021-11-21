import { useContext, useState } from 'react';
import styled from 'styled-components';

import SubscriptionData from './SubscriptionData';
import ExamplePicture from '../../../../assets/imgs/image03.png';
import NewSubscriptionContext from '../../../../contexts/NewSubscriptionContext';
import { openNewSubscriptionMenu } from '../NewSubscriptionFunctions';

export default function NewPlanDescriptionBox({ isShown }) {
    const { newSubscriptionData } = useContext(NewSubscriptionContext);
    const deliveryOptions = newSubscriptionData.plan === 'Mensal' ? ['Dia 1°', 'Dia 10', 'Dia 20'] : ['Segunda', 'Quarta', 'Sexta'];
    const newSubscriptionOptions = [
        { key: 'subscriptionOption 1', atribute: 'plan', title: 'Plano', inputType: 'radio', items: ['Semanal', 'Mensal'] },
        { key: 'subscriptionOption 2', atribute: 'deliveryDate', title: 'Entrega', inputType: 'radio', items: deliveryOptions },
        { key: 'subscriptionOption 3', atribute: 'products', title: 'Quero receber', inputType: 'checkbox', items: ['Chás', 'Incensos', 'Produtos Orgânicos'] },
    ];
    const [menuActivity, setMenuActivity] = useState([false, true, false]);
    return (
        <Wrapper isShown={isShown}>
            <img alt="Medidating Lady" src={ExamplePicture} />
            <div>
                {newSubscriptionOptions.map((newSubscriptionOption, index) => (
                    <SubscriptionData
                        key={newSubscriptionOption.key}
                        newSubscriptionOption={newSubscriptionOption}
                        isActive={menuActivity[index]}
                        openMenuFunction={() => openNewSubscriptionMenu(setMenuActivity, index)}
                    />
                ))}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    min-width: calc(100vw - 16px);
    margin: 0px 8px;
    background-color: #FFFFFF;
    border-radius: 25px;
    display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    & img {
        width: 100%;
        height: 50vw;
        object-fit: cover;
        border-radius: 25px 25px 0px 0px;
        margin-bottom: 20px;
    }
    & > div {
        width: calc(100% - 60px);
    }
`;
