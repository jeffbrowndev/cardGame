import { CardType } from "../types/CardType";

export interface ICard
{
    get cardType(): CardType;
    
    setOverlap(count: number): void;
    
    toggleSelected(): void;
}