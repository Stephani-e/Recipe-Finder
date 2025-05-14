import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import Default from './pages/Default'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/:id' element={<SingleRecipe />} />
            <Route path='*' element={<Default />}/>
          </Routes>
        </main>
      </Router>
    )
  }
}

export default App;
