import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyles from './assets/css-components/GlobalStyles';
import GlobalReset from './assets/css-components/GlobalReset';

import Homepage from './components/pages/Home/HomePage';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import SubscriptionPlans from './components/pages/SubscriptionPlans/SubscriptionPlans';

import UserDataContext from './contexts/UserDataContext';

import { getLocalUserData } from './utils/localStorage';

export default function App() {
    const [userData, setUserData] = useState(() => getLocalUserData());
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <UserDataContext.Provider value={{ userData, setUserData }}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/subscription-plans" element={<SubscriptionPlans />} />
                </Routes>
            </UserDataContext.Provider>
        </BrowserRouter>
    );
}
