import { Card } from "../Card";

export interface IPlayer
{
    selectCard(card: Card | undefined): void;

    playCard(target: Card): void;
}