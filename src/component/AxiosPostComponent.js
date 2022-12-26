import React, { useEffect, useState } from "react";
import axios from "axios";
import {axiosClient} from "./AxiosInstance";

function AxiosPostComponent(){
    const [post, setPost] = useState(null)

    useEffect(() => {
        axiosClient.post("", {
            title: "Hello, Jeevendra",
            body: "Welcome to Relevel"
        }).then((res) => {
            setPost(res.data)
        })
    }, [])

    return(
        <div>
            <h1>{post && post.title }</h1>
            <h1>{post && post.id}</h1>
            <p>{post && post.body}</p>
        </div>
    )
}

export default AxiosPostComponent