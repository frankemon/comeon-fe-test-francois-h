import React from 'react'
import Card from './GameCard'

const games = [
    {
        id: 1,
        name: 'Game 1',
        image: 'https://cdn.pixabay.com/photo/2025/05/08/11/15/swan-9587142_1280.jpg',
        description: 'Description for Game 1'
    },
    {
        id: 2,
        name: 'Game 2',
        image: 'https://cdn.pixabay.com/photo/2025/05/07/18/46/lake-9585821_1280.jpg',
        description: 'Description for Game 2'
    },
    {
        id: 3,
        name: 'Game 3',
        image: 'https://cdn.pixabay.com/photo/2025/01/12/15/00/sea-turtle-9328500_1280.jpg',
        description: 'Description for Game 3'
    }
]

export const Gallery = () => {
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
