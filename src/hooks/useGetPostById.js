import { useContext, useCallback } from "react";
import { PostsAPIContext } from "../contexts";

import { getPostByIdRequest, getPostByIdSuccess, getPostByIdError } from "../store/actions";

import useRequest from "./useRequest";

const useGetPostById = (id) => {
    const { getPostById } = useContext(PostsAPIContext);

    const request = useCallback(() => getPostById(id), [id]);

    return useRequest(request, "post", getPostByIdRequest, getPostByIdSuccess, getPostByIdError);
};

export default useGetPostById;