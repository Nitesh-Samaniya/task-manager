import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from "../pages/Signup"
import Option from "../pages/Option"
import ChooseTask from '../pages/ChooseTask'
import Todo from '../pages/Todo'
import SeeTask from '../pages/SeeTask'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/option' element={<Option />}/>
        <Route path="/chooseTask" element={<ChooseTask />}/>
        <Route path='/todo' element={<Todo />}/>
        <Route path='/seeTask' element={<SeeTask />}/>
    </Routes>
  )
}

export default AllRoutes