import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className="text-5xl">Page not found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Button variant="outlined" color="primary" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </div>
    )
}

export default NotFound