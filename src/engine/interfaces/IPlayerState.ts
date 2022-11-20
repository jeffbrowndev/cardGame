import { Card } from "../Card";

export interface IPlayerState
{
    hand: Array<Card>;

    selected: Card;

    active: Array<Card>;

    selectCard(card: Card): void;
}