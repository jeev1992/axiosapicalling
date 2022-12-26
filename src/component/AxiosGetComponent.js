import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

function AxiosGetComponent(){
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(baseUrl + "/4").then((res) => {
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

export default AxiosGetComponent