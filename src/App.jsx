import React from 'react';
import Header from './Components/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';

const App = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("dashboard");
    return (
        <>
        {noHeaderFooter || <Header />}
        <Outlet />
        {noHeaderFooter || <Footer />}
        </>
    );
};

export default App;