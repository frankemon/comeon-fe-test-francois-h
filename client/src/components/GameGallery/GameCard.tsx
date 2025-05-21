import { Card, CardContent } from '@mui/material'

interface GameCardProps {
    game: {
        id: number;
        name: string;
        image: string;
        description: string;
    }
}

// TODO: img same height on all cards, add mouseover effect: add overlay, show button, zoom image, shift card up
const GameCard = (args: GameCardProps) => {
    const { game } = args
    return (
        <Card
            className=""
        >
            <img src={game.image} alt={game.name} />
            <CardContent>
                <p>{game.name}</p>
                <p>{game.description}</p>
            </CardContent>
        </Card>
    )
}

export default GameCard
