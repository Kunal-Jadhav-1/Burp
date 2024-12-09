import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const PrivateRoute = ({ children }) => {
    const { isSignedIn, isLoading } = useUser();
    const navigate = useNavigate();

    // Ensure no delay in redirecting to the SignIn page if the user isn't authenticated
    useEffect(() => {
        if (!isLoading && !isSignedIn) {
            navigate("/signin", { replace: true });
        }
    }, [isSignedIn, isLoading, navigate]);

    if (isLoading) {
        return <div>Loading...</div>; // Or some loading indicator
    }

    return isSignedIn ? children : null;
};

export default PrivateRoute;
