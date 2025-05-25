import { Button } from "@mui/material"
import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"

declare global {
    interface Window {
        comeon: {
            game: {
                launch: (code: string) => void;
            };
        };
    }
}

const Game = () => {
    const navigate = useNavigate()
    const params = useParams()
    const code = params.id
    const gameLaunchContainerRef = useRef<HTMLDivElement>(null)
    console.log("gameLaunchContainerRef", gameLaunchContainerRef.current)

    const launchGame = () => {
        if (code && gameLaunchContainerRef.current) {
            if (window.comeon && window.comeon.game && typeof window.comeon.game.launch === "function") {
                console.log("second", gameLaunchContainerRef, window)
                gameLaunchContainerRef.current.innerHTML = ''
                window.comeon.game.launch(code)
            } else {
                console.error("comeon.game.launch is not available or not a function.")
            }
        }
    }

    useEffect(() => {
        // launchGame()
    }, [code])

    return (
        <div>
            <div className="flex justify-start w-screen px-4">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate('/games')}
                >
                    Back
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={launchGame}>
                    Play
                </Button>
            </div>
            <div
                id="game-launch"
                ref={gameLaunchContainerRef}
                className="gameWindow"
            />
        </div>
    )
}

export default Game