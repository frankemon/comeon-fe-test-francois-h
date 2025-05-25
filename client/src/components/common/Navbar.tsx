import { AppBar, Avatar, Button, Toolbar } from '@mui/material'
import { logout as logoutService } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import Profile from '../Profile/Profile'
import Search from './Search'

const Navbar = () => {
    const { player, logout, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const handleClick = async () => {
        if (player) {
            await logoutService(player?.username || '')
            logout()
        }
        navigate('/')
    }

    return (
        <AppBar
            component="nav"
            className="border-b"
            sx={{ backgroundColor: 'var(--color-primary)' }}>
            <Toolbar>
                <div className="flex items-center justify-between h-16 mx-4">
                    <div className='cursor-pointer' onClick={() => navigate('/games')}>
                        <img src="/images/logo.svg" alt="Comeon Group" title="Comeon Group" width="250" />
                    </div>
                    {
                        isAuthenticated && (
                            <Search />
                        )
                    }

                    <div className="flex items-center gap-4">
                        {isAuthenticated && (
                            <Profile />
                        )}
                        <Button
                            onClick={handleClick}
                            variant="outlined" color="primary">
                            {isAuthenticated ? 'Logout' : 'Login'}
                        </Button>
                    </div>

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar