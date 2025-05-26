import { IconButton, Menu, MenuItem } from '@mui/material'
import Profile from '../Profile/Profile'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

interface MobileMenuProps {
    handleLogout: () => void;
    isAuthenticated: boolean;
}

const MobileMenu = ({ handleLogout, isAuthenticated }: MobileMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            maxHeight: 'calc(100vh - 64px)',
                            overflowY: 'auto',
                            border: '1px solid white',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                        },
                    },
                }}
                sx={{
                    // Overlay
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <MenuItem onClick={handleClose} sx={{ justifyContent: 'flex-end' }}>
                    <CloseIcon />
                </MenuItem>
                <div>
                    {isAuthenticated && (
                        <MenuItem sx={{ marginBottom: "05.rem", marginTop: "0.5rem", paddingBlock: "1rem", boxShadow: "0 -2px 8px -2px rgba(0,0,0,0.30), 0 2px 8px -2px rgba(0,0,0,0.30)" }}>
                            <Profile />
                        </MenuItem>
                    )}
                    <MenuItem onClick={handleLogout}>
                        {isAuthenticated ? 'Logout' : 'Login'}
                    </MenuItem>
                </div>

            </Menu>
        </div>
    )
}

export default MobileMenu