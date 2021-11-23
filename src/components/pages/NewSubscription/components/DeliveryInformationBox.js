import { useContext } from 'react';
import styled from 'styled-components';

import ExamplePicture from '../../../../assets/imgs/image03.png';
import NewSubscriptionContext from '../../../../contexts/NewSubscriptionContext';
import Input from '../../../shared/Input';
import { inputUpdate } from '../NewSubscriptionFunctions';

export default function DeliveryInformationBox({ isShown }) {
    const { newSubscriptionData, setNewSubscriptionData } = useContext(NewSubscriptionContext);
    const fullLengthInputs = [
        { key: 'New Subscription Input 1', placeholder: 'Nome completo', atribute: 'name', type: 'text' },
        { key: 'New Subscription Input 2', placeholder: 'Endereço de entrega', atribute: 'adress', type: 'text' },
        { key: 'New Subscription Input 3', placeholder: 'CEP', atribute: 'zipCode', type: 'number' },
    ];
    const halfLengthInputs = [
        { key: 'New Subscription Input 4', placeholder: 'Cidade', atribute: 'city', type: 'text' },
        { key: 'New Subscription Input 5', placeholder: 'Estado', atribute: 'state', type: 'text' },
    ];
    return (
        <Wrapper isShown={isShown}>
            <img alt="Medidating Lady" src={ExamplePicture} />
            <div>
                {fullLengthInputs.map(({ key, placeholder, atribute, type }) => (
                    <Input
                        isColored
                        key={key}
                        placeholder={placeholder}
                        type={type}
                        value={newSubscriptionData[atribute]}
                        onChange={(e) => inputUpdate(
                            e,
                            atribute,
                            newSubscriptionData,
                            setNewSubscriptionData,
                        )}
                    />
                ))}
                <div>
                    {halfLengthInputs.map(({ key, placeholder, atribute, type }) => (
                        <Input
                            isColored
                            key={key}
                            placeholder={placeholder}
                            type={type}
                            marginRight="8px"
                            value={newSubscriptionData[atribute]}
                            onChange={(e) => inputUpdate(
                                e,
                                atribute,
                                newSubscriptionData,
                                setNewSubscriptionData,
                            )}
                        />
                    ))}
                </div>

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
        & div {
            display: flex;
        }
    }
`;
