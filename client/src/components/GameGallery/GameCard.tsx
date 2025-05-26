import { Button, Card, CardContent, useMediaQuery, useTheme } from '@mui/material'
import { Game } from '../../types/Game'
import { useNavigate } from "react-router-dom"

interface GameCardProps {
    game: Game
}

const GameCard = (args: GameCardProps) => {
    const { game } = args
    const navigate = useNavigate()
    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    // Push user to game page with game object in state
    // This gives access to game data without needing to fetch
    const pushToGame = (game: Game) => {
        navigate(`/games/${game.code}`, { state: { game } })
    }

    return (
        <Card>
            <CardContent className='flex justify-between items-center gap-4'>
                <div className='min-w-[50px] max-w-[330px]'>
                    <img src={game.icon} alt={game.name} title={game.name} />
                </div>
                <div>
                    <p className='font-bold'>{game.name}</p>
                    {
                        !smallScreen && game.description && (
                            <p className='text-sm text-gray-600'>{game.description}</p>
                        )
                    }
                    {smallScreen && game.description && (
                        <p className='text-sm text-gray-600 line-clamp-1 text-ellipsis'>{game.description}</p>
                    )}
                </div>
                <div className='flex items-center justify-center'>
                    <Button
                        onClick={() => pushToGame(game)}
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
