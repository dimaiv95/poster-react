const initialState = {
    searchBy: "",
    allPages: 1,
    currentPage: 1,
    loading: true,
    error: null,
    posts: null,
    post: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_POSTS_SEARCH_BY_NAME_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
                posts: null
            };
        case "GET_POSTS_SEARCH_BY_NAME_SUCCESS":
            return {
                ...state,
                allPages: Math.ceil(action.payload.data.totalResults / 10),
                loading: false,
                error: null,
                posts: action.payload.data
            };
        case "GET_POSTS_SEARCH_BY_NAME_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
                posts: null
            };
        case "SET_QUERY":
            return {
                ...state,
                searchBy: action.payload.searchBy,
                currentPage: action.payload.currentPage,
            };
        case "GET_POST_BY_ID_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
                post: {}
            };
        case "GET_POST_BY_ID_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                post: action.payload.data
            };
        case "GET_POST_BY_ID_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
                post: {}
            };
        default: return state;
    }
};

export default rootReducer;