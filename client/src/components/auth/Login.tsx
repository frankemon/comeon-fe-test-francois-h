import { Button, Card, CardContent, TextField } from "@mui/material"
import { login } from "../../services/auth"

const Login = () => {


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log("formData", formData)
        const username = formData.get("username") as string
        const password = formData.get("password") as string

        const response = await login(username, password)
        console.log("login response", response)
    }

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
                </form>
            </CardContent>
        </Card>
    )
}

export default Login
