import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

function AxiosDeleteComponent(){
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(baseUrl + "/7").then((res) => {
            setPost(res.data)
        })
    }, [])

    function deletePost(){
        axios.delete(baseUrl + "/7").then(() => {
            alert("Post deleted")
            setPost(null)
        })
    }

    return(
        <div>
            <h1>{post && post.title }</h1>
            <p>{post && post.body}</p>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    )
}

export default AxiosDeleteComponent