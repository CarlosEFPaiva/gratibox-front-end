import { useContext } from 'react';
import styled from 'styled-components';

import NewSubscriptionContext from '../../../../contexts/NewSubscriptionContext';

import { checkOption } from '../NewSubscriptionFunctions';

import { ArrowDown } from '../../../../utils/reactIcons';

export default function SubscriptionData({ newSubscriptionOption, isActive, openMenuFunction }) {
    const {
        title,
        atribute,
        inputType,
        items,
    } = newSubscriptionOption;
    const { newSubscriptionData, setNewSubscriptionData } = useContext(NewSubscriptionContext);
    const keys = ['NewSubscription Menu 1', 'NewSubscription Menu 2', 'NewSubscription Menu 3'];
    return (
        <Wrapper>
            <TopBar>
                <span>{title}</span>
                <ArrowDown isShown={!isActive} onClick={openMenuFunction} />
            </TopBar>
            <Menu isShown={isActive}>
                {
                    items.map((item, index) => (
                        <div key={keys[index]}>
                            <input
                                type={inputType}
                                checked={newSubscriptionData[atribute].includes(item)}
                                onChange={() => checkOption(
                                    atribute,
                                    item,
                                    newSubscriptionData,
                                    setNewSubscriptionData,
                                )}
                            />
                            <span>
                                {item}
                            </span>
                        </div>
                    ))
                }
            </Menu>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    border-radius: 5px;
    padding: 0pc 12px;
    background-color: #E0D1ED;
    margin-bottom: 8px;
    font-size: 18px;
    color: #4D65A8;
`;

const TopBar = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Menu = styled.div`
    width: 100%;
    height: 67px;
    display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;
