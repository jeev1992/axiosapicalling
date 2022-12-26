import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/p"

function AxiosErrorHandling(){
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(baseUrl ).then((res) => {
            setPost(res.data)
            
        }).catch(err => {
            setError(err)
        })
    }, [])

    return(
        <div>
            <h1>{error && error.message}</h1>
            <h1>{post && post[7].title}</h1>
            <p>{post && post[7].body}</p>
        </div>
    )
}

export default AxiosErrorHandling