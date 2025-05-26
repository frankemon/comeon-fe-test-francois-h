import { useAuth } from '../../context/Auth'
import { Navigate } from 'react-router-dom'
import Loader from '../common/Loader'
import { ReactNode } from 'react'

type ProtectedRouteProps = {
    children: ReactNode
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