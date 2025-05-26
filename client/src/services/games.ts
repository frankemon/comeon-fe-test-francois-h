import { Game } from "../types/Game";

export const get = async (): Promise<Game[]> => {
    try {
        const response = await fetch("http://localhost:3001/games");
        if (!response.ok) {
            throw new Error("Failed to fetch games");
        }

        const data: Game[] = await response.json()
        return data

    } catch (error) {
        console.error("Error fetching games:", error)
        throw new Error("Failed to fetch games")
    }

}