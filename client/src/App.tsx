import { AuthProvider } from './context/Auth'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Layout from './components/common/Layout'
import Auth from './pages/Auth'
import Games from './pages/Games'
import NotFound from './pages/NotFound'
import Game from './pages/Game'
import './App.css'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public route */}
            <Route path="/" element={<Auth />} />

            {/* Protected routes */}
            <Route path="/games" element={
              <ProtectedRoute>
                <Games />
              </ProtectedRoute>
            } />
            <Route path="/games/:id" element={
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            } />

            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App
