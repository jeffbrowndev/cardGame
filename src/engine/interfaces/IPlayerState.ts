import { Card } from "../elements/Card";
import { IDeck } from "./IDeck";

export interface IPlayerState
{
    initializeState(deck: IDeck): void

    hand: Array<Card>

    discardPile: Array<Card>

    score: number

    active: Array<Card>

    target: Card | undefined

    deck?: IDeck

    get selected(): Card | undefined

    set selected(card: Card | undefined)

    discard(card: Card): void
}