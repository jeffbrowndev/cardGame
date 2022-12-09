import { gameState } from "./GameState";

export class GameManager
{
    public static coinToss()
    {
        gameState.isPlayerTurn = Math.random() > 0.5;
    }
}