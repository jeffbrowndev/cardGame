import { Card } from "./Card";
import { playerState } from "./PlayerState";

export class GameManager
{
    public static setScore(): void
    {
        playerState.score = playerState.active.reduce((score, card) => 
        {
            return score + (card.value ?? 0);
        }, 0);
    }

    public static discard(card: Card): void
    {
        playerState.active.splice(playerState.active.indexOf(card), 1);
        
        playerState.discardPile.push(card);
    }
}