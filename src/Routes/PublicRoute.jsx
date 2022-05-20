import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children, isAuth }) => {    
    if (isAuth) {
        return <Navigate to='/*' />;
    }
    
    return children;
}
