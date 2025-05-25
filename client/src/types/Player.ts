export interface Player {
    name: string;
    avatar: string;
    event: string;
    password: string;
    // Added in login process because it isn't in response
    username?: string;
}