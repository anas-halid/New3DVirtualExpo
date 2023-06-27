import Layout from './Layout';
import { Routes , Route } from 'react-router-dom'
import  Login from './components/Login' ; 
import Register from './components/Register';
import Aboutus from './components/Aboutus';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import SharedLayout from './components/SharedLayout';
import Shop from './components/Shop';
import Products from './components/Products';

function App() {
  

  return (
<Routes> 
  <Route path='/' element={<SharedLayout/>}>   {/* This component is shared through out the app i.e navbar  */}
    <Route index element={<Layout/>} />   {/* this will be the default layout when user visits our link */ }
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register />} /> 
    <Route path='/products' element={<Shop />} />
    <Route path='/Aboutus' element={<Aboutus />} />
    <Route path='/Contacts' element={<Contacts />} />
    <Route path='/items' element={<Products/>}/>
    <Route path='*' element={<NotFound />} />
  </Route>
</Routes>
  
  )
}

export default App ; 



