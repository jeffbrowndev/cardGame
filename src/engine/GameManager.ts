import { PlayerState } from "./PlayerState";
import { CardClass } from "./types/CardClass";

export class GameManager
{
    public static addModifiers(cards: Array<CardClass>, target?: CardClass): void
    {
        cards.forEach(card => 
        {
            card.addModifiers(cards, target);
        });
    }

    public static runModifiers(cards: Array<CardClass>): void
    {
        cards.forEach(card => 
        {
            card.reset();

            card.modifiers.forEach(modifier => 
            {
                modifier.runModifier(card);
            });
        });
    }

    public static setScore(playerState: PlayerState): void
    {
        playerState.score = playerState.active.reduce((score, card) => score + card.value, 0);
    }
}