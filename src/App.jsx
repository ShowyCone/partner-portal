import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
