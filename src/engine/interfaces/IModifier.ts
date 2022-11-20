import { Card } from "../Card";

export interface IModifier
{
    add(cards: Array<Card>, target?: Card): void;

    run(card: Card): void;
}