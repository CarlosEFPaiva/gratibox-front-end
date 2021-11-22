import styled from 'styled-components';

const ForwardButton = styled.button`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    font-size: ${({ fontSize }) => fontSize};
    margin-top: ${({ marginTop }) => marginTop};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8C97EA;
    border-radius: 10px;
    color: #FFFFFF;
`;

export default ForwardButton;
