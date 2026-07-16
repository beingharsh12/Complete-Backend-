
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';



function App() {
  

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreatePost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
    

  )
}

export default App
