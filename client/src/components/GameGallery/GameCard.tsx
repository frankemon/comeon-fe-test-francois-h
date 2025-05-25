import { Button, Card, CardContent } from '@mui/material'
import { Game } from '../../types/Game'
import { useNavigate } from "react-router-dom"

interface GameCardProps {
    game: Game
}

// TODO: img same height on all cards, add mouseover effect: add overlay, show button, zoom image, shift card up
const GameCard = (args: GameCardProps) => {
    const { game } = args
    const navigate = useNavigate()

    const pushToGame = (code: string) => {
        navigate(`/games/${game.code}`)
    }

    return (
        <Card>
            <CardContent className='flex justify-between gap-4'>
                <div className='w-[100px]'>
                    <img src={game.icon} alt={game.name} title={game.name} />
                </div>
                <div>
                    <p>{game.name}</p>
                    {/* <p>{game.description}</p> */}
                </div>
                <div className='flex items-center justify-center'>
                    <Button
                        onClick={() => pushToGame(game.code)}
                        variant="contained"
                        color="success">
                        Play
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default GameCard
