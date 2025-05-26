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
            {/* <Container maxWidth="lg" className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]"> */}
            <Container maxWidth="lg" className="">
                {/* Main content area */}
                {children}
            </Container>
        </>
    )
}

export default Layout