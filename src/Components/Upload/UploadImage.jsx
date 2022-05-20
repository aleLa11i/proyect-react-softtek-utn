import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import { useImage } from "../Hooks/useImage";

export const UploadImage = ({ setImage, text }) => {
  const { imageUrl, loading, handleChange } = useImage();
  setImage( imageUrl[imageUrl.length-1] )
  return (
    <div className='my-5 main-image-container d-flex flex-column align-items-center justify-content-center' >
      <h4>{ text }</h4>
      <input
        type='file'
        name='image'
        id='imageUpload'
        onChange={handleChange}
        style={{
          display: 'none',
        }}
      />
      {     
              loading
                ?
        <h3> Cargando... </h3>
                :
        (
          
          imageUrl.length>0
                ?
            (
              <div className='m-5 d-flex flex-column'>
                <Image
                  width={300}
                  src={imageUrl[imageUrl.length-1]} 
                  alt='image' 
                  className='upload-image'
                  onClick={() => document.getElementById('imageUpload').click()}
                /> 
                <h5>Click en la imagen para modificarla</h5>
              </div>
            )
                : 
            (
              <>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  style={{ cursor: 'pointer' }}
                  onClick={() => document.getElementById('imageUpload').click()}
                />
              </>
            )
        )
      }
    </div>
    )
}