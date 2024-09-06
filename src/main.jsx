import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/home.jsx'
import { Rental } from './components/Rental Property/rentalProperty.jsx'
import { Resale } from './components/Resale Properties/resaleProperties.jsx'
import { Services } from './components/Services/services.jsx'
import { AC } from './components/Services/Providers/ac.jsx'
import { Painting } from './components/Services/Providers/painting.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home/>}/>
    <Route path='rental' element={<Rental/>}/>
    <Route path='resale' element={<Resale/>}/>
    <Route path='service' element={<Services/>}/>
    <Route path='/service/ac' element={<AC/>}/>
    <Route path='/service/painting' element={<Painting/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>


  </StrictMode>,
)
