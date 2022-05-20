import Swal from "sweetalert2";
import { fetchWithoutToken } from "../Helpers/fetch";

export const uploadNewPost = (post) =>{
    const alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return async (dispatch) => {
        try {

            if( post.title === '' )
            {
                alert.fire(
                    'El título no puede estar vacío!',
                    '',
                    'error'
                )
            }
            else
            {
                dispatch( newPostFinish(true) )

                const resp = await fetchWithoutToken("posts/new", post, "POST");
                const body = await resp.json();
            
                if( body.ok ) {
                    alert.fire(
                        'Excelente! Nuevo post creado!',
                        'Refresque la página para ver los cambios.',
                        'success'
                    )
                }
                else
                {
                    alert.fire(
                        'Ocurrió un error! No se pudo subir el post.',
                        'Contactese con el adminitrador.',
                        'danger'
                    )
                }
            dispatch( newPostFinish(false) );  

            }
            

        } catch (error) {
            console.log(error)
        }
    }
}

export const getPosts = () => {
    return async (dispatch) => {
        try {
            
            const resp = await fetchWithoutToken("posts/get" , null , "GET" )
            const body = await resp.json()
                          
            if(body.ok){
                dispatch( postsLoading(body.posts));
            }

        } catch (error) {
            console.log(error)
        }
    }
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

export const postsLoading = (posts) => ({
    type: 'Post Loading',
    payload: posts
})

export const newPostFinish = (finish) => ({
    type: 'New Post Finish',
    payload: finish 
})