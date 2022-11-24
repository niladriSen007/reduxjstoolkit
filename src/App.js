import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App