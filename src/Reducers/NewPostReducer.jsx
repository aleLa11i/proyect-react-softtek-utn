const initialState = {
    finish:             false,
    title:              '',
    mainimage:          null,
    images:             [],
    description:        ''
    
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
        case "New Post Finish":
            return ({
                state,
                finish: action.payload,
            })
        default:
            return state;
    }
}