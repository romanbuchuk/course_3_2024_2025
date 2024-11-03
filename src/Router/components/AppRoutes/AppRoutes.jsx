import Layout from '@components/Layout';
import Auth from '@pages/Auth';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={Layout}>
                <Route index element={<Main />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/*" element={<Navigate to="/404" replace />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
