import React from 'react'
import Header from './containers/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className='App'>
      <h1>React Redux APP</h1>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' exect element={<ProductListing/>} />
      <Route path='/product/:productId' exect element={<ProductDetails/>}/>
      <Route>404 Not Found!</Route>
      </Routes>
      </Router> 
    </div>
  )
}

export default App