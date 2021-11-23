import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyles from './assets/css-components/GlobalStyles';
import GlobalReset from './assets/css-components/GlobalReset';

import Homepage from './components/pages/Home/HomePage';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import SubscriptionPlans from './components/pages/SubscriptionPlans/SubscriptionPlans';
import SubscriptionDetails from './components/pages/SubcriptionDetails/SubscriptionDetails';

import UserDataContext from './contexts/UserDataContext';
import NewSubscriptionContext from './contexts/NewSubscriptionContext';

import { getLocalUserData } from './utils/localStorage';
import NewSubscription from './components/pages/NewSubscription/NewSubscription';

export default function App() {
    const [userData, setUserData] = useState(() => getLocalUserData());
    const [newSubscriptionData, setNewSubscriptionData] = useState({
        plan: '',
        deliverDate: '',
        products: [],
        name: '',
        adress: '',
        zipCode: '',
        city: '',
        state: '',
    });
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <UserDataContext.Provider value={{ userData, setUserData }}>
                <NewSubscriptionContext.Provider
                    value={{ newSubscriptionData, setNewSubscriptionData }}
                >
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
                        <Route path="/subscription-details" element={<SubscriptionDetails />} />
                        <Route path="/new-subscription" element={<NewSubscription />} />
                    </Routes>
                </NewSubscriptionContext.Provider>
            </UserDataContext.Provider>
        </BrowserRouter>
    );
}
