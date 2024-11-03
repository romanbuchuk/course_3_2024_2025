import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './components/AppRoutes';

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <AppRoutes />
        </BrowserRouter>
    );
};

export default Router;