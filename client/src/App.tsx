import { AppBar, Box, Button, Container } from '@mui/material'
import './App.css'
import Login from './components/auth/Login'
import { Gallery } from './components/GameGallery/Gallery'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Container maxWidth="lg" className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <Login />
      {/* <Gallery /> */}
    </Container>
  )
}

export default App
