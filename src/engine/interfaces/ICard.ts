import { Class } from "../types/TDeck";
import { IModifier } from "./IModifier";

export interface ICard
{
    get class(): Class

    get description(): string

    get modifier(): IModifier | undefined

    get name(): string

    get value(): number | undefined

    set value(value: number | undefined)

    select(): void

    unselect(): void

    reset(): void

    setOverlap(amount: number): void

    runModifier(): void
}