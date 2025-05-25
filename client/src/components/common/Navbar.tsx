import { AppBar, Button } from '@mui/material'
import { logout } from '../../services/auth'
import { useNavigate } from 'react-router-dom'

interface NavbarProps {
    isLoggedIn?: boolean
}

const Navbar = ({ isLoggedIn }: NavbarProps) => {
    const navigate = useNavigate()

    const handleClick = async () => {
        if (isLoggedIn) {
            await logout("username")
        } else {
            navigate('/')
        }
    }

    return (
        <AppBar
            component="nav"
            className="border-b"
            sx={{ backgroundColor: 'var(--color-primary)' }}>
            <div className="flex items-center justify-between h-16 mx-4">
                <h1 className="text-white text-2xl">ComeonCasino</h1>
                <Button
                    onClick={handleClick}
                    variant="contained" color="primary">
                    {isLoggedIn ? 'Logout' : 'Login'}
                </Button>
            </div>

        </AppBar>
    )
}

export default Navbar