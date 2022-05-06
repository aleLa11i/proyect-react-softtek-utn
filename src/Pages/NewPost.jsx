import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../Components/NewPost/Loading";
import { SetDescription } from "../Components/NewPost/SetDescription/SetDescription";
import { UploadImages } from "../Components/NewPost/UploadImages/UploadImages";
import { UploadMainImage } from "../Components/NewPost/UploadMainImage/UploadMainImage";

export const NewPost = () => {

  const {mainimage, images}= useSelector(state => state.newpost)
  const loading = false;

  console.log(images.length)
  console.log(mainimage)

  return (
    <>
      {
        (loading)
          ?
        <Loading /> 
          :
        (
          (mainimage)
              ?
                
          ( 
            (images.length>0) 
                ? 
            <SetDescription /> 
                : 
            <UploadImages />
          )
              :
        <UploadMainImage />  
        )
      }
    </>
  );
};
