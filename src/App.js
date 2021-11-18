import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './assets/css-components/GlobalStyles';
import GlobalReset from './assets/css-components/GlobalReset';
import Homepage from './pages/Home/HomePage';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
}
