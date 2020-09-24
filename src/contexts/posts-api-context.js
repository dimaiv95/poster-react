import React from "react";

const PostsAPIContext = React.createContext(null);

const {
    Provider: PostsAPIProvider,
    Consumer: PostsAPIConsumer
} = PostsAPIContext;

export { PostsAPIContext, PostsAPIProvider, PostsAPIConsumer };