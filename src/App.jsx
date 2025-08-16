import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import FavoritePage from './Pages/Favorite'
import {Routes, Route} from 'react-router-dom'
import NotFoundPage from './Pages/404page'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/favorite' element={<FavoritePage></FavoritePage>}></Route>
        <Route path='/*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </main>
  )
}

export default App
