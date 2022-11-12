import { CardType } from "../types/CardType";

export interface ICard
{
    get cardType(): CardType

    get value(): number
    
    get active(): boolean

    set active(active: boolean)

    setOverlap(amount: number): void

    select(): void

    unselect(): void
}