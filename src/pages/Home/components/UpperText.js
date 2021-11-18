import styled from 'styled-components';

import PageTitle from '../../shared/PageTitle';

export default function UpperText() {
    return (
        <Wrapper>
            <PageTitle fontSize="28px" marginBottom="42px">
                Bem vindo ao Gratibox
            </PageTitle>
            <Description>
                Receba em casa um box com chás, produtos organicos, incensos e muito mais...
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
    width: 100%;
    text-align: center;
    font-size: ${({ fontSize }) => fontSize};
    margin-bottom: ${({ marginBottom }) => marginBottom};
    color: #FFFFFF;
    font-weight: 300;
`;
