import { FormEvent } from "react"
import { Button, TextField } from "@mui/material"
import { login as loginService } from "../../services/auth"
import { useAuth } from "../../context/Auth"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const LoginForm = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Reset error on submit
        setError("")

        // Basic validation
        if (!username || !password) {
            setError("Username and password are required")
            return
        }

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
        setUsername("")
        setPassword("")
    }, [])

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4"
        >
            <TextField
                name="username"
                label="Username"
                variant="outlined"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!error && !username}
                required
                fullWidth
            />

            <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!password && error !== ""}
                required
                fullWidth
            />

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
    )
}

export default LoginForm
