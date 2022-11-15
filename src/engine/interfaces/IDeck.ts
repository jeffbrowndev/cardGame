import { CardClass } from "../types/CardClass";

export interface IDeck 
{
    draw(count: number): Array<CardClass>;
}