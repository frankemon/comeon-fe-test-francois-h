import { AppBar, Button, Theme, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { logout as logoutService } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import Profile from '../Profile/Profile'
import Search from './Search'
import MobileMenu from './MobileMenu'
import { useState } from 'react'

const Navbar = () => {
    const { player, logout, isAuthenticated } = useAuth()
    const navigate = useNavigate()
    const theme = useTheme<Theme>()

    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleClick = async () => {
        if (player) {
            await logoutService(player?.username || '')
            logout()
        }
        navigate('/')
        if (showMobileMenu) {
            setShowMobileMenu(false)
        }
    }

    return (
        <AppBar
            component="nav"
            className="border-b"
            sx={{ backgroundColor: 'var(--color-primary)' }}>
            <Toolbar sx={{ margin: 0, padding: 0 }}>
                <div className="flex w-full items-center justify-between h-16 mx-4">
                    <div className='cursor-pointer' onClick={() => navigate('/games')}>
                        {/* Show SVG logo on md and up, favicon on small screens */}
                        <img
                            src="/images/logo.svg"
                            alt="Comeon Group"
                            title="Comeon Group"
                            className="hidden lg:block w-xs"
                        />
                        <img
                            src="/images/favicon.ico"
                            alt="Comeon Group"
                            title="Comeon Group"
                            className="block lg:hidden w-8"
                        />
                    </div>

                    {
                        isAuthenticated && (
                            <Search smallScreen={smallScreen} />
                        )
                    }

                    {
                        !smallScreen &&
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
                    }
                    {smallScreen && (
                        <MobileMenu
                            handleLogout={handleClick}
                            isAuthenticated={isAuthenticated}
                        />
                    )}



                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar