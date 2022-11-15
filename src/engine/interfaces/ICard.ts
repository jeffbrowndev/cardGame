import { PlayerState } from "../PlayerState";
import { CardClass } from "../types/CardClass";

export interface ICard
{
    get modifiers(): Set<CardClass>;
    
    get value(): number;

    get baseValue(): number;
    
    get active(): boolean;

    set active(active: boolean);
    
    setOverlap(amount: number): void;

    select(): void;

    unselect(): void;

    updateHtml(): void;

    runModifier(cards: CardClass): void;
}