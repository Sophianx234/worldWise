
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'

function App() {
  
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route index element={<Homepage/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='pricing' element={<Pricing/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
