import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './authContext'; // Import your AuthContext

function PrivateRoutes() {
    const { token } = useAuth(); // Get the token from AuthContext

    return(
        token ? <Outlet/> : <Navigate to="/" />
    )

}

export default PrivateRoutes;
