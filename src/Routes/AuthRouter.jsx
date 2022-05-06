import { BrowserRouter as Router,Route} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../Components/Auth/RegisterScreen';

export const AuthRouter = () => {

    return (
        <div className="auth_main">
            <div className="auth_conteiner">
                <Router>
                    <Switch>
                            <Route exact path="/auth/login" component={  LoginScreen } />
                            <Route exact path="/auth/register" component={ RegisterScreen } />

                            {/* <Redirect to="/auth/login" /> */}
                        </Switch>
                </Router>
            </div>
        </div>
    )
}
