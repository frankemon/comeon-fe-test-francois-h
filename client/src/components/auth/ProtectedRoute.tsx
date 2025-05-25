import React from 'react'
import { useAuth } from '../../context/Auth'
import { Navigate } from 'react-router-dom'
import Loader from '../common/Loader'

type ProtectedRouteProps = {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, loading } = useAuth()

    if (loading) {
        return <Loader />
    }

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