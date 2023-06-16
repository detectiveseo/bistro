import React from 'react';
import Header from './Components/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';

const App = () => {
    const location = useLocation();
    console.log(import.meta.env.VITE_APIKEY)
    const noHeaderFooter = location.pathname.includes("account");
    return (
        <>
        {noHeaderFooter || <Header />}
        <Outlet />
        {noHeaderFooter || <Footer />}
        </>
    );
};

export default App;