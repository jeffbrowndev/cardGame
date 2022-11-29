import { Card } from "../elements/Card";

export interface IDeck 
{
    draw(hand: Array<Card>, count: number): void
}