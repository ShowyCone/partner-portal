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
<<<<<<< HEAD
import ContactUs from './pages/contactUs/ContactUs'
=======
import ScheduleMeeting from './pages/meeting/ScheduleMeeting'
>>>>>>> 1671e7e4268ded6d442a01740cd959f1dea40f33

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
<<<<<<< HEAD
        <Route path='/contactUs' element={<ContactUs />} />
=======
        <Route path='/schedule-meeting' element={<ScheduleMeeting />} />
>>>>>>> 1671e7e4268ded6d442a01740cd959f1dea40f33
      </Routes>
      <Footer />
    </>
  )
}

export default App
