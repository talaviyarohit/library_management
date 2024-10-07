
import AddProduct from './Components/AddProduct/AddProduct'
import { Route, Routes } from 'react-router'
import Admin from './Components/Admin/Admin'

import Products from './Components/Products/Products'

import EditProducts from './Components/EditProducts/EditProducts'


import ViewProduct from './Components/ViewProduct/ViewProduct'
import Login from './Components/Login/Login'
import RegisterPage from './Components/Login/RegisterPage'



function App() {


  return (
    <>
   
      {/* <Admin /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addevent" element={<AddProduct />} />
        
        <Route path='/event' element={<Products/>}/>
       
        <Route path='/edit' element={<EditProducts/>}/>
        <Route path='/view' element={<ViewProduct/>}/>
        <Route path='/registerPage' element={<RegisterPage />}/>
        
      </Routes>


    </>
  )
}

export default App
