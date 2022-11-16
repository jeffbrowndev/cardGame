import { Card } from "../Card";
import { CardClass } from "../types/CardClass";

export class Weakling extends Card
{
    public readonly _type = "Weakling";
    public readonly _baseValue = 3;
    public _value = this.baseValue;

    public addModifiers(cards: Array<CardClass>): void | undefined
    {
        return undefined;
    }

    public runModifier(card: CardClass): void | undefined
    {
        return undefined;
    }
}