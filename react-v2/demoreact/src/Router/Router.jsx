import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import Posts from '../Pages/Post/Posts'
function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/post" element={<Posts/>}/>
    </Routes>
  )
}
export default Router