import { Card, CardContent } from '@mui/material'
import LoginForm from '../components/auth/LoginForm'

const Auth = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)]'>
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <div className="text-center">
                        <h1 className='text-3xl font-bold'>Welcome Back</h1>
                        <p>Login to access your casino account and start winning</p>
                    </div>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default Auth