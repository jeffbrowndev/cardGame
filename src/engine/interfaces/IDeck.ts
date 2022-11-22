import { Card } from "../Card";

export interface IDeck 
{
    draw(hand: Array<Card>, count: number): void
}