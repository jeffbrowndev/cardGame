import { Card } from "./Card";
import { PlayerState } from "./PlayerState";

export class GameManager
{
    public static addModifiers(cards: Array<Card>, target?: Card): void
    {
        cards.forEach(card => card.addModifiers(cards, target));
    }

    public static runControllers(cards: Array<Card>): void
    {
        cards.forEach(card => 
        {
            card.reset();

            card.runControllers(card);
        });
    }

    public static setScore(playerState: PlayerState): number
    {
        return playerState.active.reduce((score, card) => 
        {
            return score + (card.value ?? 0);
        }, 0);
    }
}