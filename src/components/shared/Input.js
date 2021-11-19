import styled from 'styled-components';

const Input = styled.input`
    width: calc( 100% - 50px);
    height: 64px;
    padding-left: 18px;
    border: none;
    border-radius: 10px;
    background-color: #FFFFFF;
    color: #000000;
    font-size: 24px;
    outline: none;
    margin-bottom: 8px;
    &::placeholder{
        color: rgba(96, 72, 72, 0.4);
    }
`;

export default Input;
