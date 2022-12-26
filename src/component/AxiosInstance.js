import React, { useEffect, useState } from "react";
import axios from "axios";

//const baseUrl = "https://jsonplaceholder.typicode.com/posts"
//Axios Instance haveing common attributes(config object) across all requests
export const axiosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

function AxiosInstance(){
    const [post, setPost] = useState(null)

    useEffect(() => {
        axiosClient.get("/4").then((res) => {
            setPost(res.data)
        })
    }, [])

    return(
        <div>
            <h1>{post && post.title}</h1>
            <p>{post && post.body}</p>
        </div>
    )
}

export default AxiosInstance