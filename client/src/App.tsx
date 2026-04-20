import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ResumeProvider } from './context/ResumeContext'
import { ToastProvider } from './components/ui/Toast'
import Home from './pages/Home'
import Builder from './pages/Builder'
import Preview from './pages/Preview'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </ResumeProvider>
    </AuthProvider>
  )
}

export default App