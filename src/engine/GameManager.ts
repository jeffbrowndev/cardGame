import { Card } from "./Card";
import { playerState } from "./PlayerState";

export class GameManager
{
    public static addModifiers(): void
    {
        playerState.active.forEach(card => card.addModifier());
    }

    public static runControllers(): void
    {
        playerState.active.forEach(card => 
        {
            card.reset();

            card.runControllers(card);
        });
    }

    public static setScore(): void
    {
        playerState.active.reduce((score, card) => 
        {
            return score + (card.value ?? 0);
        }, 0);
    }
}