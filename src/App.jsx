
import Navbar from './ui_components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './ui_components/HomePage'
import About from './pages/About'
import "./app.css"
import Footer from './ui_components/Footer'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './ScrollToTop'
const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App