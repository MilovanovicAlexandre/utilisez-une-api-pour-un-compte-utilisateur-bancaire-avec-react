import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home/home.jsx'
import SignIn from './Pages/SignIn/signin.jsx'
import User from './Pages/User/user.jsx'
import Error from './Pages/Error/error.jsx'
import Header from './Components/Header/header.jsx'
import Footer from './Components/Footer/footer.jsx'

function App() {
  return (
    <div>
      <Router>
        {/*The Routes component is equivalent of the Switch component 
        If the 3 top path have not been find so the component Error is called
        */}
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/Home' />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Sign-in' element={<SignIn />}/>
          <Route path='/User' element={<User />}/>
          <Route path='*' element={<Error />}/>        
        </Routes>
        <Footer />  
      </Router>
    </div>
  )
}

export default App
