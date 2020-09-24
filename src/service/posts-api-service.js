import axios from "axios";

class PostsAPIService{
    constructor(){
        this.APIService = axios.create({
            baseURL: "https://www.omdbapi.com/",
            headers: {
                "Content-Type": "application/json"
            },
        });
    }

    getPostsSearchByName = async (serachBy, currentPage = 1) => {
        return await this.APIService.get(`?apikey=6be9a3f7&s=${serachBy}&page=${currentPage}`);
    }

    getPostById = async (id) => {
        return await this.APIService.get(`?apikey=6be9a3f7&&i=${id}`);
    }
}

export default PostsAPIService;