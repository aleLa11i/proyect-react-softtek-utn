import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMainImage } from '../../../Actions/posts';
import { UploadImage } from '../../Upload/UploadImage';


export const MainImage = () => {

  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();

  return (
    <div
      className='m-5 d-flex flex-column align-items-center justify-content-center'
    >
        <UploadImage
          text='Sube un imagen principal!'
          setImage={ setMainImage }
        />
        
        <Button 
          onClick={ () => dispatch(addMainImage(mainImage)) }
          disabled={ !mainImage }
        >
          Siguiente
        </Button>
    </div>
  )
}
