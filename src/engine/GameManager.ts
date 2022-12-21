import { gameState } from "./GameState";
import { IPlayerState } from "./interfaces/IPlayerState";

export class GameManager
{
    public static coinToss(playerState: IPlayerState, botState: IPlayerState): void
    {
        const playerGoesFirst = Math.random() > 0.5;

        if (playerGoesFirst)
        {
            gameState.setPlayerStates(playerState, botState);
        }
        else
        {
            gameState.setPlayerStates(botState, playerState);
        }

        gameState.isPlayerTurn = playerGoesFirst;
    }
}