import { Card } from "../Card";

export interface IDeck 
{
    get allCards(): Array<Card>;

    draw(count: number): Array<Card>;
}