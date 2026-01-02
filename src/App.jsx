import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import TOS from './pages/TOS'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<TOS />} />
      </Routes>
    </Router>
  )
}

export default App

