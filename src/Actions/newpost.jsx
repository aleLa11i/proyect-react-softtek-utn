export const uploadNewPost = () =>{
    //  Subir nuevo post al backend
}

export const addTitle = (title) => ({ 
    type:'Add Title',
    payload: title 
});

export const addMainImage = (mainimage) => ({ 
    type:'Add MainImage',
    payload: mainimage 
});

export const addImages = (images) => ({ 
    type:'Add Images',
    payload: images 
});

export const addDescription = (description) => ({ 
    type:'Add Description',
    payload: description 
});

export const addStars = (name, value) => ({
    type:'Add Stars',
    payload: {
        name,
        value
    }
});

export const newPost = () => ({
    type:'New Post'
})
