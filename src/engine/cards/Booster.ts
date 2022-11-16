import { Card } from "../Card";
import { CardClass } from "../types/CardClass";

export class Booster extends Card
{
    public readonly _type = "Booster";
    public readonly _baseValue = 2;
    public _value = this.baseValue;
    public readonly destroyAfterUse = false;

    public addModifiers(cards: Array<CardClass>)
    {
        cards.forEach(card => 
        {
            if (card.type !== this.type)
            {
                card.modifiers.add(this);
            }
        });
    }

    public runModifier(card: CardClass): void
    {
        card.value += 1;
    }
}