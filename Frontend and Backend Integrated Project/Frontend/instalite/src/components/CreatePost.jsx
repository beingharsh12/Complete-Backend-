import React from 'react'
import axios from 'axios'

const CreatePost = () => {

const handleSubmit = async (e)=>{
 e.preventDefault();
const formData = new FormData(e.target)

axios.post('http://localhost:3000/data',formData)
.then((res)=>{
 console.log(res)
 e.target.reset()
})

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' />
            <input type="text" name='caption' placeholder="enter caption" />
            <button type='submit'>Submit</button>
            
        </form>

        <a href="/feed">See posts</a>
    </div>
  )
}

export default CreatePost
