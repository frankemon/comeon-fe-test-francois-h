import Gallery from '../components/GameGallery/Gallery'
import Categories from '../components/Categories/Categories'
import { useEffect, useState } from 'react'
import { get as fetchGames } from '../services/games'
import { useGames } from '../context/Games'

const Games = () => {
    const [loading, setLoading] = useState<boolean>(true)
    // Centralized state management for games, search term, and selected category
    const { games, setGames, selectedCategory, setSelectedCategory, searchTerm } = useGames()


    const getGames = async () => {
        setLoading(true)
        const response = await fetchGames()
        if (response) {
            const games = response || []
            setGames(games)
        }
        setLoading(false)
    }

    // Filter by category
    const gamesByCategory =
        selectedCategory === 0 || selectedCategory === null
            ? games
            : games.filter(game => game.categoryIds.includes(selectedCategory));

    // Filter by search term
    const gamesBySearch = !searchTerm
        ? gamesByCategory
        : gamesByCategory.filter(game =>
            game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
            <div className='flex flex-col gap-4 items-center mt-2 lg:mt-0'>
                <Categories
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <Gallery games={gamesBySearch} loading={loading} />
            </div>
        </>
    )
}

export default Games