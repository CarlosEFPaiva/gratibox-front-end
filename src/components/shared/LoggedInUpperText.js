import { useContext } from 'react';
import styled from 'styled-components';

import UserDataContext from '../../contexts/UserDataContext';

import PageTitle from './PageTitle';

export default function LoggedInUpperText({ isSubscribed }) {
    const { userData } = useContext(UserDataContext);
    const welcomeText = `Bom te ver por aqui, ${userData.firstName}`;
    return (
        <Wrapper>
            <PageTitle fontSize="24px" marginBottom="24px">
                {welcomeText}
            </PageTitle>
            <Description isSubscribed={isSubscribed}>
                {
                    isSubscribed ?
                        '"Agradecer é a arte de atrair coisas boas"' :
                        'Você ainda não assinou um plano, que tal começar agora?'
                }
            </Description>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 0px 32px;
    display: flex;
    flex-direction: column;
`;

const Description = styled.span`
    font-size: 18px;
    margin-bottom: ${({ isSubscribed }) => (isSubscribed ? '20px' : '40px')};
    line-height: 22px;
    color: #FFFFFF;
    font-weight: 300;
`;
