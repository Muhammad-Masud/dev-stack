import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import TechnologiesSection from './components/TechnologiesSection.tsx'
import Footer from './components/Footer.tsx'

const App = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main>
      <Hero />
      <TechnologiesSection />
    </main>
    <Footer />
    <ToastContainer
      position="bottom-right"
      autoClose={2200}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
    />
  </div>
)

export default App
