import { useRef } from 'react';
import styled from 'styled-components';

import OptionsRefContext from '../../../../contexts/OptionsRefContext';

import MonthlyPlan from './MonthlyPlan';
import WeeklyPlan from './WeeklyPlan';

export default function AvailablePlans() {
    const divOptionsRef = useRef();
    return (
        <Wrapper ref={divOptionsRef}>
            <OptionsRefContext.Provider value={divOptionsRef}>
                <WeeklyPlan />
                <MonthlyPlan />
            </OptionsRefContext.Provider>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    scroll-behavior: smooth;
`;
