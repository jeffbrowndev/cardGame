import { Card } from "./elements/Card";
import { playerState } from "./PlayerState";

export class GameManager
{
    public static runAllModifiers(): void
    {
        playerState.active.forEach(card => card.reset());

        playerState.active.forEach(card => card.runModifier());
    }

    public static setScore(): void
    {
        playerState.score = playerState.active.reduce((score, card) => 
        {
            return score + (card.value ?? 0);
        }, 0);
    }

    public static discard(card: Card): void
    {
        const index = playerState.active.indexOf(card);

        playerState.active.splice(index, 1);
        
        playerState.discardPile.push(card);
    }
}