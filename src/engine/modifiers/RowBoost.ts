import { Card } from "../Card";
import { IModifier } from "../interfaces/IModifier";

export class RowBoost implements IModifier
{
    public add(cards: Array<Card>): void
    {
        cards.forEach(card => 
        {
            if (!card.modifiers?.includes(this))
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