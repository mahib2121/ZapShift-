// import { getAuth } from 'firebase/auth';
// import React from 'react';
// import useAuth from '../hooks/useAuth';
// import { Navigate } from 'react-router-dom';

// const PriveteRoute = ({ children }) => {
//     const { user, loading } = useAuth()
//     if (loading) {
//         <span className="loading loading-spinner loading-xl"></span>
//     }
//     if (!user) {

//         return <Navigate to='/login'> </Navigate>
//     }
//     return (
//         <div>

//         </div>
//     );
// };

// export default PriveteRoute;



import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    // Show loading spinner
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    // Redirect if not logged in
    if (!user) {
        return <Navigate state={location.pathname} to="/login" replace />;
    }

    // Allow access to protected page
    return children;
};

export default PrivateRoute;
