import React, { useEffect, useState } from 'react';
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMainImage } from '../../../Actions/newpost';


export const UploadMainImage = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setMainImage(reader.result);
            };
            reader.readAsDataURL(image);
        } 
        else 
        {
            setMainImage(null);
        }
    }, [image]);


  return (
    <div className='main-image-container m-5 d-flex flex-column align-items-center justify-content-center' >
        <input
            type="file"
            name="mainImage"
            id="mainImageUpload"
            onChange={(e) => setImage(e.target.files[0])}
            style={{
              display: "none",
            }}
          />
        {
          mainImage 
              ?
          (
          <>
            <h2>Click en la imagen para modificarla</h2>
            <img 
              className='m-5'
              src={mainImage} 
              alt="mainImage" 
              style={{ maxHeight: "80vh", cursor: "pointer" }} 
              onClick={() => document.getElementById("mainImageUpload").click()}
            /> 
            <Button onClick={ () => dispatch(addMainImage(mainImage)) }> Siguiente</Button>
          </>
          )
              : 
          (
          <>
            <h2>Sube un imagen principal!</h2>
            <FontAwesomeIcon
              icon={faSquarePlus}
              style={{ cursor: "pointer" }}
              onClick={() => document.getElementById("mainImageUpload").click()}
            />
          </>
          )
        }
        
    </div>
  )
}
