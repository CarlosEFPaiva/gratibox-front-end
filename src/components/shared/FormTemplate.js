import styled from 'styled-components';

import Input from './Input';
import ForwardButton from './ForwardButton';
import { LoadingDots } from '../../utils/reactLoader';

export default function FormTemplate({ inputs, onSubmit, buttonText, buttonMarginTop, isLoading }) {
    return (
        <Wrapper onSubmit={(e) => onSubmit(e)}>
            {inputs.map(({ key, name, type, value, onChange }) => (
                <Input
                    key={key}
                    placeholder={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            ))}
            <ForwardButton width="237px" height="58px" fontSize="36px" marginTop={buttonMarginTop} type="submit">
                {isLoading ? <LoadingDots /> : buttonText}
            </ForwardButton>
        </Wrapper>
    );
}

const Wrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
