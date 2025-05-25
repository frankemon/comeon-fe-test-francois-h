import React from 'react'
import Navbar from './Navbar'
import { Container } from '@mui/material'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" className="flex flex-col items-center justify-center h-screen">

                {children}
            </Container>
        </>
    )
}

export default Layout