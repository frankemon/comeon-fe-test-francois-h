import { LoginResponse } from "../types/Auth"

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    if (!username || !password) {
        throw new Error("Username and password required.")
    }
    try {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        })

        if (!response.ok) {
            throw new Error("Login failed")
        }

        const data: LoginResponse = await response.json()

        return data
    } catch (error) {
        console.error("Login error:", error)
        throw new Error("Login failed. Please try again.")
    }
}

// No data returned except status, so Promise<void>
export const logout = async (username: string): Promise<void> => {
    if (!username) {
        throw new Error("Username required.")
    }
    try {
        const response = await fetch("http://localhost:3001/logout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            }
        )

        if (!response.ok) {
            throw new Error("Logout failed")
        }

        window.location.href = "/"
    } catch (error) {
        console.error("Logout error:", error)
        throw new Error("Logout failed")

    }
}