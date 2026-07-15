import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import Feed from './components/Feed';



function App() {
  

  return (

    <Router>
      <Routes>
        <Route path='/' element={<CreatePost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
