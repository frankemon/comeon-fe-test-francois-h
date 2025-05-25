import React from 'react'
import { useAuth } from '../../context/Auth'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated } = useAuth()

    return (
        <>
            {isAuthenticated ? (
                <>{children}</>
            )
                :
                <Navigate to="/" replace />
            }
        </>
    )
}

export default ProtectedRoute