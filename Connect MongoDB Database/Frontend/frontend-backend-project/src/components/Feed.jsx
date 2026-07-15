import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Feed = () => {
    
    const [post,setPost] = useState([{
        _id:'1',
        title:'harsh',
        description:'this is caption'
    }])

   useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/notes");
    console.log(response.data.notes);
    setPost(response.data.notes)
  };

  fetchData();
}, []);
    return (
    <div>
        {
            post.length>0 ? post.map((obj)=>(
                <div key={obj._id}>
                    <h1>title:{obj.title}</h1>
                    <h1>Description: {obj.description}</h1>
                </div>
            ))
            :
            <h1>No post found</h1>
        }
    </div>
  
)}

export default Feed