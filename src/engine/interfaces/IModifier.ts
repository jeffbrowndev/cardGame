import { Card } from "../Card";

export interface IModifier
{    
    add(): void;

    run(card: Card): void;
}