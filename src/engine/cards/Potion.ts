import { Card } from "../Card";
import { CardClass } from "../types/CardClass";

export class Potion extends Card
{
    public readonly _type = "Potion";
    public readonly _baseValue = 0;
    public _value = this.baseValue;
    
    public addModifiers(cards: Array<CardClass>, target?: CardClass): void
    {
        if (target)
        {
            target.modifiers.add(this);
        }
    }

    public runModifier(card: CardClass): void
    {
        card.value += 5;
    }
}