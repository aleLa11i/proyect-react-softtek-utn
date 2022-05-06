import { Redirect, Route } from 'react-router-dom';

export const PubliceRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {


    return (
        
        <Route {...rest}
            component={(props) =>{

                return (isAuthenticated)?
                (<Redirect to="/" />):
                (<Component {...props} />)
            }
                
        }
        />
    );
};