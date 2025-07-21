import { Routes, Route } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import Discover from './pages/discover/Discover'
import NotificationBanner from './components/ui/NotificationBanner'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Apply from './pages/provider/Apply'
import SingleService from './pages/SingleService'
import CreateServiceForm from './pages/create-service/CreateServiceForm'
import PartnerDashboard from './pages/PartnerDashboard'
import ProviderLogin from './pages/provider/ProviderLogin'
import Partners from './pages/partners/Partners'
import ScheduleMeeting from './pages/meeting/ScheduleMeeting'

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
        <Route path='/signup' element={<SignUp />} />
        <Route path='/provider/login' element={<ProviderLogin />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/service/:id' element={<SingleService />} />
        <Route path='/create-service' element={<CreateServiceForm />} />
        <Route path='/partner/:id' element={<PartnerDashboard />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/schedule-meeting' element={<ScheduleMeeting />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
