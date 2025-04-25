
import './App.css'
import { Signin } from './pages/SigninPage'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Signup } from './pages/SignupPage'
import { Dashboard } from './pages/Dashboard'
import { HomePage } from './pages/HomePage'

  function App() {
    

    return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  }
 

  export default App
