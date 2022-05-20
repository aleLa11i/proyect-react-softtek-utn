import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../Pages';


export const AuthRouter = () => {

    return (
        <Routes>
            <Route path="login" element={  <LoginScreen /> } />
            <Route path="register" element={ <RegisterScreen /> } />

            <Route path="*" element={<Navigate to='login' />} />    
        </Routes>
    )
}
