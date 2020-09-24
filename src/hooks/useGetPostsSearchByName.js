import { useContext, useCallback } from "react";
import { PostsAPIContext } from "../contexts";

import { getPostsSearchByNameRequest, getPostsSearchByNameSuccess, getPostsSearchByNameError } from "../store/actions";

import useRequest from "./useRequest";

const useGetPostsSearchByName = (searchBy, currentPage) => {
    const { getPostsSearchByName } = useContext(PostsAPIContext);

    const request = useCallback(() => getPostsSearchByName(searchBy, currentPage), [searchBy, currentPage]);

    return useRequest(request, "posts", getPostsSearchByNameRequest, getPostsSearchByNameSuccess, getPostsSearchByNameError);
};

export default useGetPostsSearchByName;