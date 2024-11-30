"use client";
import {useState,useEffect} from "react";



export  default function FetchPostsPage(){
    const [posts,setPosts] =useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/external")
        .then ((res) => res.json() )
        .then((data)=> {
            if(data.success){
                setPosts(data.data)
            }else {
                setError(data.message)
            }
        })
        .catch((err)=> setError("An expected error"))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}> 
            <h1 style={{ textAlign: "center" }}>Posts</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            <ul>
                {posts.map((post:{id:number,title:string})=> (
                    <div>
                    <li
                        key={post.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "20px",
                            width: "300px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#fff",
                        }}
                        > 
                        <h2 
                        style={{ fontSize: "18px", margin: "0 0 10px" }}>
                        {post.title}</h2>
                    </li>
                    <p style={{ fontSize: "14px", color: "#666" }}>
                            This is some placeholder text for post #{post.id}.
                        </p>
                    </div>
                ))}
            </ul>
            </div>

        </div>
    )
}