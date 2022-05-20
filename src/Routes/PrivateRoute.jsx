import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, isAuth }) => {    
    if (!isAuth) {
        return <Navigate to='/auth/*' />;
    }
    
    return children;
}