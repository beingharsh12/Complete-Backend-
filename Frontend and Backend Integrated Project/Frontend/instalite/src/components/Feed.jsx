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
        <section>
    <div className='flex flex-wrap gap-5'>
        {
            post.length>0 ? post.map((obj)=>(
                <div key={obj._id} className='h-150 w-100 border rounded flex flex-col items-center'>
                    <div className='h-120 w-auto'>
                      <img src={obj.image} alt={obj.caption} className='h-full w-auto'/>
                    </div>
                    <h1 className='pt-5'>{obj.caption}</h1>
                </div>
            ))
            :
            <h1>No post found</h1>
        }
        <div>
        </div>
    </div>
            <a href="/" className='text-blue-500 hover:underline'>Create New Post</a>
     </section>
)}

export default Feed