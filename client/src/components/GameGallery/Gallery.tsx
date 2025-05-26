import Card from "./GameCard"
import { Game } from "../../types/Game"
import Loader from '../common/Loader'
import NoGames from './NoGames'

interface GalleryProps {
    loading: boolean;
    games: Game[]
}

const Gallery = ({ games, loading }: GalleryProps) => {

    return (
        <>
            {loading && <Loader />}
            {
                !loading && games.length === 0 &&
                <NoGames />
            }
            {
                !loading && games.length > 0 &&
                <div className="flex flex-col gap-4 mb-4">
                    {games.map((game, index) => {
                        return (
                            <Card key={index} game={game} />
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Gallery
