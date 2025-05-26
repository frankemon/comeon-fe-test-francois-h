import { Button } from "@mui/material"
import { useEffect, useRef } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const Game = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const game = location.state?.game;
    const code = game.code
    const gameLaunchContainerRef = useRef<HTMLDivElement>(null)

    const launchGame = () => {
        if (code && gameLaunchContainerRef.current) {
            if (window.comeon && window.comeon.game && typeof window.comeon.game.launch === "function") {
                gameLaunchContainerRef.current.innerHTML = ''
                window.comeon.game.launch(code)
            } else {
                console.error("comeon.game.launch is not available or not a function.")
            }
        }
    }

    useEffect(() => {
        launchGame()
    }, [code])

    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-2">{game.name ?? ""}</h1>
            </div>
            <div
                id="game-launch"
                ref={gameLaunchContainerRef}
                className="gameWindow"
            />
            {game.description && (
                <div className="mb-4">
                    <p className="leading-4">
                        {game.description}
                    </p>
                </div>
            )}
            <div className="flex justify-center items-center mb-4">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate('/games')}
                >
                    Back
                </Button>
            </div>
        </>
    )
}

export default Game