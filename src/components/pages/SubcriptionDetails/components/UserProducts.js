import { useContext } from 'react';
import styled from 'styled-components';
import UserDataContext from '../../../../contexts/UserDataContext';

export default function UserProducts() {
    const { userData } = useContext(UserDataContext);
    const completeArray = userData.products.map((item, index) => ({ item, key: `Product ${index}` }));
    return (
        <Wrapper>
            {
                completeArray.map(({ item, key }) => (
                    <span key={key}>{item}</span>
                ))
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    font-weight: 400;
    color: #e63C80;
`;
