import styled from 'styled-components';

const Input = styled.input`
    width: ${({ isColored }) => (isColored ? '100%' : 'calc( 100% - 50px)')};
    height: 64px;
    padding-left: 18px;
    border: none;
    border-radius: 10px;
    background-color: ${({ isColored }) => (isColored ? 'rgba(224,209,237,0.62)' : '#FFFFFF')};
    color: ${({ isColored }) => (isColored ? '#4D65A8' : '#000000')};
    font-size: 24px;
    outline: none;
    margin-right: ${({ marginRight }) => marginRight};
    margin-bottom: 8px;
    &::placeholder{
        color: ${({ isColored }) => (isColored ? '#4D65A8' : 'rgba(96, 72, 72, 0.4)')};
    }
`;

export default Input;
