import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addImages } from '../../../Actions/newpost';

export const UploadImages = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [newImages, setNewImages] = useState([]);

    useEffect(() => {
        if(newImages.length>0){
            console.log('efecto');
            Array.from(newImages).forEach( img => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImages(img => [...img, reader.result]);
                };
                reader.readAsDataURL(img);
            })
        }
        setNewImages([])

    }, [newImages.length]);

  return (
    <div
      className='m-5 d-flex flex-column align-items-center justify-content-center'
      style={{
          fontSize: "9em",
      }}
    >
        <input
            type="file"
            name="Images"
            id="ImagesUpload"
            onChange={(e) => setNewImages(e.target.files)}
            style={{
              display: "none",
            }}
            multiple
        />
        
        <h2>Sube las imagenes del álbum</h2>
        <div
            className='m-5 d-flex'
            style={{ cursor: "pointer" }}
            onClick={() => document.getElementById("ImagesUpload").click()}
        >
            <FontAwesomeIcon
            icon={faImages}
            
            />
            <FontAwesomeIcon
            icon={faPlus}
            />
        </div> 

            {
                (images.length!==0)
                    &&
                (
                    <>
                        <Button onClick={()=>dispatch(addImages(images))}> Siguiente</Button>
                        
                        <div
                            className='d-flex flex-wrap justify-content-center' 
                        >
                            {images.map( (img,index) =>(
                                <img 
                                    className='m-3'
                                    key={index}
                                    src={img} 
                                    alt="images"
                                    style={{
                                        'maxWidth':'100px'
                                    }} 
                                />
                            ))}
                        </div>
                    </>
                )
            }
    </div>
  )
}
