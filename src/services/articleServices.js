import axiosWithAuth from "./../utils/axiosWithAuth";

const articleService = ()=> {
    return axiosWithAuth()
        .get("/articles")
        .then(resp => {
            return (resp.data);
        })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.