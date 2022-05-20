const initialState = [];

export const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Post Loading":
            return ({
                ...state,
                posts: action.payload
            })
        case "Logout Clean":
            return(initialState); 
        default:
            return state;
    }
}