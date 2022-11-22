import { Card } from "../Card";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class RowBoost implements IModifier
{
    public add(): void
    {
        playerState.active.forEach(card => 
        {
            if (card.modifier !== this)
            {
                card.controllers.add(this);
            }
        });
    }

    public run(card: Card): void
    {
        if (card.value)
        {
            card.value += 1;
        }
    }
}