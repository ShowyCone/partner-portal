import { Routes, Route } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import Discover from './pages/discover/Discover'
import NotificationBanner from './components/ui/NotificationBanner'
import Login from './pages/auth/Login'
import Apply from './pages/provider/Apply'

function App() {
  return (
    <>
      <NotificationBanner />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/apply' element={<Apply />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
