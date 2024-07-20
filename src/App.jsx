
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import Cities from './components/Cities'
import Countries from './components/Countries'
import Form from './components/Form'
import City from './components/City'

function App() {
  
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route index element={<Homepage/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='pricing' element={<Pricing/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='app' element={<AppLayout/>}>
    <Route path='cities' element={<Cities/>}/>
    <Route path='cities/:id' element={<City/>}/>
    <Route path='countries' element={<Countries/>}/>
    <Route path='form' element={<Form/>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>}/> 
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
