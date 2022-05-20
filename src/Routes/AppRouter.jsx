import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Navigate, Route} from 'react-router-dom';
import { Checking } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const {name}= useSelector(state => state.auth)
    useEffect(() => {
        
        dispatch(Checking());

    }, [dispatch])

    return (  
        <BrowserRouter>
            <Routes> 
                <Route 
                    exact path='auth/*' 
                    element={ 
                        <PublicRoute
                            isAuth={ !!name }
                        >
                            <AuthRouter />
                        </PublicRoute>
                    } 
                />
                <Route 
                    exact path='/*' 
                    element={ 
                        <PrivateRoute
                            isAuth={ !!name }
                        >
                            <DashboardRoutes />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
        
    )
}