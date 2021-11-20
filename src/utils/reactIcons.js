import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

const ArrowDown = styled(AiOutlineArrowDown)`
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color};
    display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
`;

export {
    ArrowDown,
};
