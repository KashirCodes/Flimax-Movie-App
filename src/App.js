import { AllRoutes } from './routes/AllRoutes'
import { Header, Footer } from './components'
import './App.css'
import SoundBar from './SoundBar'

function App() {
  return (
    <div>
  
      <Header />
      <AllRoutes />
      <SoundBar />
      <Footer />
    </div>
  )
}

export default App
