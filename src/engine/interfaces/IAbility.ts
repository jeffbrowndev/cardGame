import { Card } from "../elements/Card";

export interface IAbility
{
    targetType?: string

    card?: Card

    priority: number

    run(): void
}