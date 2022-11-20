import { Card } from "../Card";

export interface ICard
{
    get modifiers(): Set<Card>;
    
    get value(): number;

    get baseValue(): number;
    
    setOverlap(amount: number): void;

    select(): void;

    unselect(): void;

    updateHtml(): void;

    addModifiers(cards: Array<Card>, target?: Card): void | undefined;

    runModifier(card: Card): void | undefined;
}