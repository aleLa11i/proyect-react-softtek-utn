import { Figure, Button, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const ProfileData = () => {

  const {name, image, email}= useSelector(state => state.auth)

  return (
    <div className='d-flex align-items-center justify-content-center m-3 mx-5 flex-wrap'>
      <Image
        className='rounded-circle'
        style={{'objectFit':'cover'}}
        width={150}
        height={150}
        src={
          image
            ||
          'https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000'
        }
      />

      <div className='d-flex flex-column m-5'>
        <h1>{ name }</h1>
        <h4>{ email }</h4>
        
      </div>

    </div>
  )
}
