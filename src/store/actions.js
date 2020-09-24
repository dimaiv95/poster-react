export const getPostsSearchByNameRequest = () => ({ type: "GET_POSTS_SEARCH_BY_NAME_REQUEST" });
export const getPostsSearchByNameSuccess = (data) => ({ type: "GET_POSTS_SEARCH_BY_NAME_SUCCESS", payload: data });
export const getPostsSearchByNameError = (error) => ({ type: "GET_POSTS_SEARCH_BY_NAME_ERROR", payload: error });

export const setQuery = (data) => ({ type: "SET_QUERY", payload: data });

export const getPostByIdRequest = () => ({ type: "GET_POST_BY_ID_REQUEST" });
export const getPostByIdSuccess = (data) => ({ type: "GET_POST_BY_ID_SUCCESS", payload: data });
export const getPostByIdError = (error) => ({ type: "GET_POST_BY_ID_ERROR", payload: error });