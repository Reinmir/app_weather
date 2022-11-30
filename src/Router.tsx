import React from 'react';
import { Routes, Route } from 'react-router-dom'

import App from './components/App/App';
import MainPage from './pages/MainPage/MainPage';


const Router: React.FC = () => {

    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/mainpage' element={<MainPage />} />
        </Routes>
    )
}

export default Router