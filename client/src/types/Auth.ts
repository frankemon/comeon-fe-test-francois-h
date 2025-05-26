import { Player } from "./Player";

export interface LoginResponse {
    player: Player;
    status: string;
}