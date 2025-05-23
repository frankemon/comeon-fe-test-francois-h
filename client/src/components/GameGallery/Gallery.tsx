import React, { useEffect, useState } from 'react'
import Card from "./GameCard"
import { get as fetchGames } from "../../services/games"
import { get as fetchCategories } from '../../services/categories'
import { Game } from "../../types/Game"

export const Gallery = () => {
    const [games, setGames] = useState<Game[]>([])

    const getGames = async () => {
        const response = await fetchGames()
        if (response) {
            setGames(response)
        }
        console.log("games response:", response)
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
        <div>
            <h1>Available Games</h1>
            <div className="grid grid-cols-3 gap-4">
                {games.map((game, index) => {
                    return (
                        <Card key={index} game={game} />
                    )
                })}
            </div>
        </div>
    )
}
