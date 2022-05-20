import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addImages } from '../../../Actions/posts';
import { useImage } from '../../Hooks/useImage';

export const ImagesAlbum = () => {
    const dispatch = useDispatch();
    const { imageUrl, handleChange } = useImage();
    
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
            onChange={handleChange}
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
                (imageUrl.length>0)
                    &&
                (
                    <>
                        <Button onClick={()=>dispatch(addImages(imageUrl))}> Siguiente</Button>
                        
                        <div
                            className='d-flex flex-wrap justify-content-center' 
                        >
                            {imageUrl.map( (img,index) =>(
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
