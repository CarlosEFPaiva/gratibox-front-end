import styled from 'styled-components';

import Input from '../../../shared/Input';
import ForwardButton from '../../../shared/ForwardButton';

export default function SignInForm({ inputs, onSubmit }) {
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
            <ForwardButton width="237px" height="58px" fontSize="36px" marginTop="136px" type="submit">
                Login
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
