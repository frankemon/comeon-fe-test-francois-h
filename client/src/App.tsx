import { AppBar, Box, Button, Container } from '@mui/material'
import './App.css'
import Login from './components/auth/Login'
import { Gallery } from './components/GameGallery/Gallery'

const App = () => {
  return (
    <Container maxWidth="lg" className="position-relative flex flex-col items-center justify-center h-screen">
      <AppBar position="absolute" className="border-b" sx={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="flex items-center justify-between h-16 mx-4">
          <h1 className="text-white text-2xl">ComeonCasino</h1>
          <Button variant="contained" color="primary">
            Logout
          </Button>
        </div>

      </AppBar>
      {/* <Login /> */}
      <Gallery />
    </Container>
  )
}

export default App
