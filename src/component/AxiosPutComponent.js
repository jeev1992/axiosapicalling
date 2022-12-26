import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

function AxiosPutComponent(){
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(baseUrl + "/7").then((res) => {
            setPost(res.data)
        })
    }, [])

    function updatePost(){
        axios.put(baseUrl + "/7", {
            title: "Hello World",
            body: "This is an updated post"
        }).then((res) => {
            setPost(res.data)
        })
    }

    return(
        <div>
            <h1>{post && post.title }</h1>
            <p>{post && post.body}</p>
            <button onClick={updatePost}>Update Post</button>
        </div>
    )
}

export default AxiosPutComponent