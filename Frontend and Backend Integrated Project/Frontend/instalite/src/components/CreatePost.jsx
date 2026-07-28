import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()

const handleSubmit = async (e)=>{
 e.preventDefault();
const formData = new FormData(e.target)

axios.post('http://localhost:3000/data',formData)
.then((res)=>{
 navigate('/feed')
 e.target.reset()
})

}
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex justify-center items-center'>
           <div className='border flex flex-col items-center w-1/2 p-4 gap-5 mt-5' >
             <input type="file" name='image' className='border rounded p-2 w-full'/>
            <input type="text" name='caption' placeholder="enter caption"  className='border rounded p-2 w-full'/>
            <button type='submit' className='border rounded pt-1 pb-1 pl-3 pr-3 bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:transition-1'>Submit</button>
           </div>
            
        </form>

        <a href="/feed" className='text-blue-500 hover:underline flex justify-center'>See posts</a>
    </div>
  )
}

export default CreatePost
