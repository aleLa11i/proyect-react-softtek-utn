import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../Components/NewPost/Loading";
import { SetDescription } from "../Components/NewPost/SetDescription/SetDescription";
import { ImagesAlbum } from "../Components/NewPost/UploadImages/ImagesAlbum";
import { MainImage } from "../Components/NewPost/UploadImages/MainImage";

export const NewPost = () => {

  const {mainimage, images, finish}= useSelector(state => state.newpost)

  return (
    <>
      {
        (finish)
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
            <ImagesAlbum />
          )
              :
        <MainImage />  
        )
      }
    </>
  );
};
