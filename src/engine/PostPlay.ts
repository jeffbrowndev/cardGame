import { gameState } from "./GameState";
import { IPlayerState } from "./interfaces/IPlayerState";

export class PostPlay
{
    public static run(state: IPlayerState): void
    {
        this.runModifiers(state);
        this.setScore(state);
        this.endTurn();
    }

    private static runModifiers(state: IPlayerState): void
    {
        state.active.forEach(card => card.reset());

        state.active.forEach(card => card.modifier?.run(state, card));
    }

    private static setScore(state: IPlayerState): void
    {
        state.score = state.active.reduce((score, card) => 
        {
            return score + (card.value ?? 0);
        }, 0);
    }

    private static endTurn(): void
    {
        gameState.isPlayerTurn = !gameState.isPlayerTurn;
    }
}