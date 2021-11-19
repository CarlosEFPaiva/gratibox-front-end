import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './assets/css-components/GlobalStyles';
import GlobalReset from './assets/css-components/GlobalReset';

import Homepage from './components/pages/Home/HomePage';
import SignIn from './components/pages/SignIn/SignIn';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
