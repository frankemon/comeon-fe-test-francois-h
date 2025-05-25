// TODO: add type for these
export const get = async () => {
    try {
        const response = await fetch("http://localhost:3001/categories");
        if (!response.ok) {
            throw new Error("Failed to fetch games");
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error("Error fetching games:", error)
        throw new Error("Failed to fetch games")
    }

}