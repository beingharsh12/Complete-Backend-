import React from 'react'
import axios from 'axios'

const CreatePost = () => {

const handleSubmit = async (e)=>{
 e.preventDefault();
const formData = new FormData(e.target)
const data = {
 title: formData.get('title'),
 description: formData.get('description')
}

axios.post('http://localhost:3000/notes',data)
.then((res)=>{
 console.log(res)
 e.target.reset()
})

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='enter name' />
            <input type="text" name='description' placeholder="enter caption" />
            <button type='submit'>Submit</button>
            
        </form>
    </div>
  )
}

export default CreatePost
