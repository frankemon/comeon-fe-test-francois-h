import Gallery from '../components/GameGallery/Gallery'
import Categories from '../components/Categories/Categories'
import { Game } from '../types/Game'
import { useEffect, useState } from 'react'
import { get as fetchGames } from '../services/games'
import useFilter from '../hooks/useFilter'

const Games = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [games, setGames] = useState<Game[]>([])

    const { selectedCategory, setSelectedCategory, filteredGames } = useFilter(games)
    console.log("games tsx filteredGames:", filteredGames)

    const getGames = async () => {
        setLoading(true)
        const response = await fetchGames()
        if (response) {
            const games = response || []
            setGames(games)
        }
        setLoading(false)
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
            <div className='flex flex-col gap-4'>
                <Categories
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Gallery games={filteredGames} loading={loading} />
            </div>
        </>
    )
}

export default Games