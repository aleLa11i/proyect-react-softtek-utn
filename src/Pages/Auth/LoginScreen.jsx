import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { StartLogin } from '../../actions/auth';
import { useForm } from '../../Components/Hooks/useForm';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [value, handleInputChange] = useForm({
        email:'',
        password:''
    })
    const {email,password} = value;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(StartLogin(value));
    }

    return(
        <div className='p-5 d-flex flex-column login-screen'>  
            <h3>Ingreso</h3>
            <form onSubmit={ handleSubmit }>
                <div className='form-group m-2 w-50'>
                    <input 
                        type='text'
                        name='email'
                        className='form-control'
                        placeholder='Correo'
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className='form-group m-2 w-50'>
                    <input
                        name='password'
                        type='password'
                        className='form-control'
                        placeholder='Contraseña'
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className='form-group m-2 w-50'>
                <Button
                    onClick={ handleSubmit }
                >
                    Login
                </Button>
                </div>
            </form>
            
            <Link
                className='link'
                to='/auth/register'
            >
                Todavia no tiene una cuenta?
            </Link>
        </div>
    )
}
