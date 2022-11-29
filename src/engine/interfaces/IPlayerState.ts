import { Card } from "../elements/Card";
import { IDeck } from "./IDeck";

export interface IPlayerState
{
    initializeState(deck: IDeck): void

    get hand(): Array<Card>

    get discardPile(): Array<Card>

    get score(): number

    set score(score: number)

    get active(): Array<Card>

    get target(): Card | undefined

    set target(target: Card | undefined)

    get selected(): Card | undefined

    set selected(card: Card | undefined)

    set deck(deck: IDeck | undefined)

    get deck(): IDeck | undefined
}