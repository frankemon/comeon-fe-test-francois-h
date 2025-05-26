import { Category } from "../types/Category";

export const get = async (): Promise<Category[]> => {
    try {
        const response = await fetch("http://localhost:3001/categories");
        if (!response.ok) {
            throw new Error("Failed to fetch games");
        }

        const data: Category[] = await response.json()
        return data

    } catch (error) {
        console.error("Error fetching games:", error)
        throw new Error("Failed to fetch games")
    }

}