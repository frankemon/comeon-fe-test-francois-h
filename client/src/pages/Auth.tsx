import { Card, CardContent } from '@mui/material'
import LoginForm from '../components/auth/LoginForm'

const Auth = () => {
    return (
        <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="text-center">
                    <h1>Welcome Back</h1>
                    <p>Login to access your casino account and start winning</p>
                </div>
                <LoginForm />
            </CardContent>
        </Card>
    )
}

export default Auth