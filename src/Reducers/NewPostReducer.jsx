import { v4 as uuidv4 } from 'uuid';

const initialState = {
    postId:             null,
    title:              '',
    mainimage:          null,
    images:             [],
    description:        '',
    stars:[ {
                        name:'food',
                        value:null
    }, {
                        name:'place',
                        value:null
    }, {
                        name:'view',
                        value:null
    }, {
                        name:'entertainment',
                        value:null
    }, {
                        name:'weather',
                        value:null
    } ]
    
}

export const NewPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add Title":
            return ({
                ...state,
                title: action.payload
            })
        case "Add MainImage":
            return ({
                ...state,
                mainimage: action.payload
            })
        case "Add Images":
            return ({
                ...state,
                images: action.payload
            })
        case "Add Description":
            return ({
                ...state,
                description: action.payload
            })
        case "Add Stars":
            return ({
                ...state,
                stars: state.stars.map( star => ( star.name === action.payload.name ) ? action.payload : star )
            })
        case "New Post":
            return ({
                ...state,
                postId: uuidv4()
            })
        default:
            return state;
    }
}