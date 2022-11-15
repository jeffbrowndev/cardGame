import { CardClass } from "../types/CardClass";

export interface IPlayerState
{
    hand: Array<CardClass>;

    selected: CardClass;

    active: Array<CardClass>;

    selectCard(card: CardClass): void;
}