import Button from '@components/Button';
import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
    const [shouldShowForm, setShouldShowForm] = useState(false);
    const handleClick = () => {
        setShouldShowForm(true);
    };

    return (
        <div className="custom-layout">
            <Outlet />
            <div>
                {shouldShowForm && <Navigate to="/auth"></Navigate>}
                {!shouldShowForm && <Button onClick={handleClick}>Open Form</Button>}
            </div>
        </div>
    );
}

export default Layout;
