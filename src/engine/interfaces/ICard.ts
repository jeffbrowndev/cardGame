import { Class } from "../types/TDeck";
import { IAbility } from "./IAbility";

export interface ICard
{
    readonly name: string;

    readonly class: Class;

    readonly ability?: IAbility;

    readonly baseValue?: number;

    readonly description: string;

    index?: number;

    dependentBoost: number;
    
    fixedBoost: number;

    get value(): number | undefined

    set value(value: number | undefined)

    select(): void

    unselect(): void

    reset(): void
}