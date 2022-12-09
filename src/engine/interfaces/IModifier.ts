import { Card } from "../elements/Card";
import { IPlayerState } from "./IPlayerState";

export interface IModifier
{
    requiresTarget?: boolean

    run(state: IPlayerState, card?: Card): void;
}