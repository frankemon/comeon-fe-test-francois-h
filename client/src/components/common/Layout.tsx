import { ReactNode } from 'react'
import Navbar from './Navbar'
import { Container, Toolbar } from '@mui/material'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <Toolbar className='mt-4' />
            <Container maxWidth="lg" className="flex flex-col items-center">
                {children}
            </Container>
        </>
    )
}

export default Layout