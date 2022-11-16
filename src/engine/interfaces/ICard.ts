import { CardClass } from "../types/CardClass";

export interface ICard
{
    get modifiers(): Set<CardClass>;
    
    get value(): number;

    get baseValue(): number;
    
    setOverlap(amount: number): void;

    select(): void;

    unselect(): void;

    updateHtml(): void;

    addModifiers(cards: Array<CardClass>, target?: CardClass): void | undefined;

    runModifier(card: CardClass): void | undefined;
}