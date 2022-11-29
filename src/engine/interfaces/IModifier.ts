import { Card } from "../elements/Card";

export interface IModifier
{
    requiresTarget?: boolean

    run(cardInPlay: Card): void;
}