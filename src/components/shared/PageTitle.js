import styled from 'styled-components';

const PageTitle = styled.span`
    width: 100%;
    text-align: center;
    font-size: ${({ fontSize }) => fontSize};
    margin-bottom: ${({ marginBottom }) => marginBottom};
    color: #FFFFFF;
`;

export default PageTitle;
