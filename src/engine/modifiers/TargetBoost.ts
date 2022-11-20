import { Card } from "../Card";
import { IModifier } from "../interfaces/IModifier";

export class TargetBoost implements IModifier
{
    public add(cards: Array<Card>, target: Card): void
    {
        target.controllers.add(this);
    }

    public run(card: Card): void
    {
        if (card.value)
        {
            card.value += 5;
        }
    }
}