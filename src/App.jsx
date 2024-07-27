
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Form from './components/Form'
import City from './components/City'
import Cities from './components/Cities'
import Countries from './components/Countries'
import { lazy, Suspense } from 'react'
import { RotateLoader } from 'react-spinners'
import RotateLoaderFullpage from './components/RotateLoaderFullpage'


/* import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
 */

const Homepage = lazy(()=>import('./pages/Homepage'))
const Product = lazy(()=>import('./pages/Product'))
const Pricing = lazy(()=>import('./pages/Pricing'))
const Login = lazy(()=>import('./pages/Login'))
const AppLayout = lazy(()=>import('./pages/AppLayout'))
const PageNotFound = lazy(()=>import('./pages/PageNotFound'))


function App() {
  
  return (
   <>
   <BrowserRouter>
   <Suspense fallback={<RotateLoaderFullpage/>}>
   <Routes>
    <Route index element={<Homepage/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='pricing' element={<Pricing/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='app' element={
      <ProtectedRoute>
      <AppLayout/>
      </ProtectedRoute>
      }>

    <Route path='cities' element={<Cities/>}/>
    <Route path='cities/:id' element={<City/>}/>
    <Route path='countries' element={<Countries/>}/>
    <Route path='form' element={<Form/>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>}/> 
   </Routes>
   </Suspense>
   </BrowserRouter>
   
   </>
  )
}

export default App
