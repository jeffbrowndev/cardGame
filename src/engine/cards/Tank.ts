import { Card } from "../Card";
import { CardClass } from "../types/CardClass";

export class Tank extends Card
{
    public readonly _type = "Standard";
    public readonly _baseValue = 15;
    public _value = this.baseValue;

    public addModifiers(cards: Array<CardClass>): void
    {
        return undefined;
    }

    public runModifier(card: CardClass): void
    {
        return undefined;
    }
}