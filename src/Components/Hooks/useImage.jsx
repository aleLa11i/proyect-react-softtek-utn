import { useEffect, useState } from "react";

export const useImage = () => {

    const [images, setImages] = useState([])
    const [imageUrl, setImageUrl] = useState([]);
    const [loading, setloading] = useState(false);

    const handleChange = ({target}) => {
        const newImages = Array.from(target.files);
        setImages([...newImages])
    }

    async function fetchData (image){
        setloading(true);
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'went2-app');
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/alela11i/image/upload',
            {
                method: 'POST',
                body:data
            }        
        )
        
        const file = await res.json();

        if(file) setloading(false);

        setImageUrl( im => [...im, file.secure_url ]);      
    };
    
    useEffect(() => {
        if(images.length>0)
        {
            images.forEach( image =>{
    
                fetchData( image );
            })   
        }
        else setImageUrl([]);
    }, [ images ])

    useEffect(() => {
        return () => {
            setImages([])
        }
    }, [])

    
  return {imageUrl, loading, handleChange};
}