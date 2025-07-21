import { Routes, Route } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import Discover from './pages/discover/Discover'
import NotificationBanner from './components/ui/NotificationBanner'
import Login from './pages/auth/Login'
import Apply from './pages/provider/Apply'
import SingleService from './pages/SingleService'
import CreateServiceForm from './pages/create-service/CreateServiceForm'
import PartnerDashboard from './pages/PartnerDashboard'

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
        <Route path='/service/:id' element={<SingleService />} />
        <Route path='/create-service' element={<CreateServiceForm />} />
        <Route path='/partner/:id' element={<PartnerDashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
