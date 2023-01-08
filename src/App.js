import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import GetBook from './GetBook'
import Register from './Register'

const App = () => {
  const token = JSON.parse(localStorage.getItem('data'))
  console.log(token)
  return (
   <>
  <BrowserRouter><Navbar token={token}/><Routes><Route path="/" element={<Home token={token}/>}></Route><Route path="/Register" element={<Register/>}></Route>{token ?<Route path="/" element={<Home/>}></Route>:<Route path="/Login" element={<Login/>}></Route>}<Route path="/" element={<Home/>}></Route><Route path="/GetBook" element={<GetBook/>}></Route></Routes></BrowserRouter>
   </>
  )
}

export default App
