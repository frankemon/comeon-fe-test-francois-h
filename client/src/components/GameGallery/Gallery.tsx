import React, { useEffect, useState } from 'react'
import Card from "./GameCard"
import { get as fetchGames } from "../../services/games"
import { get as fetchCategories } from '../../services/categories'
import { Game } from "../../types/Game"
import Loader from '../common/Loader'
import NoGames from './NoGames'

export const Gallery = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [games, setGames] = useState<Game[]>([])

    const getGames = async () => {
        setLoading(true)
        const response = await fetchGames()
        if (response) {
            setGames(response)
        }
        console.log("games response:", response)
        setLoading(false)
    }

    const getCategories = async () => {
        const response = await fetchCategories()
        if (response) {
            console.log("categories response:", response)
        }
    }

    useEffect(() => {
        getGames()
        getCategories()
    }, [])

    return (
        <>
            {loading && <Loader />}
            {
                !loading && games.length === 0 &&
                <NoGames />
            }
            {
                !loading && games.length > 0 &&
                <div className="flex flex-col gap-4">
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
