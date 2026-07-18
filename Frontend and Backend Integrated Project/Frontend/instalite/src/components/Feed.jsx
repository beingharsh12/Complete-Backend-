import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Feed = () => {
    
    const [post,setPost] = useState([{
        _id:'1',
        image:'https://ik.imagekit.io/Harshsharma9412/image_DJOZkxeaA.jpg',
        caption:'this is caption'
    }])

   useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/data");
    console.log(response.data);
    setPost(response.data.data)
  };

  fetchData();
}, []);
    return (
    <div>
        {
            post.length>0 ? post.map((obj)=>(
                <div key={obj._id}>
                   <img style={{height:'200px'}} src={obj.image} alt={obj.caption} />
                    <h1>{obj.caption}</h1>
                </div>
            ))
            :
            <h1>No post found</h1>
        }
        <div>
            <a href="/">Create New Post</a>
        </div>
    </div>
  
)}

export default Feed