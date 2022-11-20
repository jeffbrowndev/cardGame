import { Card } from "../Card";

export interface IDeck 
{
    draw(count: number): Array<Card>;
}