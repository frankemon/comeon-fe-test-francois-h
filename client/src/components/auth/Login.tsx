import { Button, Card, CardContent, TextField } from "@mui/material"

const Login = () => {
    return (
        <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="text-center">
                    <h1>Welcome Back</h1>
                    <p>Login to access your casino account and start winning</p>
                </div>
                <form
                    onSubmit={() => { }}
                    className="flex flex-col gap-4 mt-4"
                >
                    <TextField label="Username" variant="outlined" type="email" fullWidth />
                    <TextField label="Password" variant="outlined" type="password" fullWidth />
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
