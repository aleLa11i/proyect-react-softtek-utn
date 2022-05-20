import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { StartRegister } from '../../actions/auth';
import { useForm } from '../../Components/Hooks/useForm';
import { UploadImage } from '../../Components/Upload/UploadImage';


export const RegisterScreen = () => {

    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const [value, handleInputChange] = useForm({
        email:'',
        password1:'',
        password2:'',
        name:'',
        username:''
    })
    const { email, password1, password2, name, username, imageURL } = value;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password1 !== password2){
            Swal.fire('Error', 'Ambas contraseñas deben coincidir', 'error')
        }

         dispatch(StartRegister({
             email,
             name,
             password:password1,
             image
         }));
    }

    return (
        <div className='pt-5 d-flex flex-column register-screen'>
            <form 
                className='d-flex flex-wrap align-items-center justify-content-around' 
                onSubmit={ handleSubmit } 
            >
                <div>
                    <h3>Registro</h3>
                    <div className='form-group m-2 w-100'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Nombre'
                            value={ name }
                            name='name'
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className='form-group m-2 w-100'>
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Correo'
                            value={ email }
                            name='email'
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className='form-group m-2 w-100'>
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Contraseña' 
                            value={ password1 }
                            name='password1'
                            onChange={ handleInputChange }
                        />
                    </div>

                    <div className='form-group m-2 w-100'>
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Repita la contraseña' 
                            value={ password2 }
                            name='password2'
                            onChange={ handleInputChange }
                        />
                    </div>
                </div>
            
                
                <UploadImage 
                    text='Sube una imagen de perfil'
                    setImage={ setImage }
                />
                

            </form>

           <div
                className='d-block mx-auto px-5 py-3'
           >
                <Button
                    onClick={ handleSubmit }
                    >
                    Crear Cuenta
                </Button>
                <Link
                    className='link d-block'
                    to='/auth/login'
                >
                    Ya posee una cuenta?
                </Link>
           </div>

        </div>
    )
}
