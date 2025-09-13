import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Mens from './Pages/Mens'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
     </Routes>

      <Footer/>
    </>
  )
}

export default App
