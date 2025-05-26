import { Button, Card, CardContent, TextField } from "@mui/material"
import { login as loginService } from "../../services/auth"
import { useAuth } from "../../context/Auth"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<string>("")


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get("username") as string
        const password = formData.get("password") as string

        try {
            const response = await loginService(username, password)
            // Add username to player object because its not in response
            const player = { ...response?.player, username }
            login(player)
            navigate("/games")
        } catch (error: any) {
            console.error("Login error:", error)
            setError(error.message)
        }
    }

    useEffect(() => {
        // Clear input fields on mount
        // TODO: Proper way is state controlled inputs
        if (usernameRef.current) usernameRef.current.value = ""
        if (passwordRef.current) passwordRef.current.value = ""
    }, [])

    return (
        <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="text-center">
                    <h1>Welcome Back</h1>
                    <p>Login to access your casino account and start winning</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 mt-4"
                >
                    <TextField name="username" label="Username" variant="outlined" type="text" fullWidth />
                    <TextField name="password" label="Password" variant="outlined" type="password" fullWidth />
                    <div className="flex justify-center">
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <div>
                        {error && (
                            <p className="text-red-500 text-center">
                                {error}
                            </p>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Login
