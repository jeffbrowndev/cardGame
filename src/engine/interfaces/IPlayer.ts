import { Card } from "../elements/Card";

export interface IPlayer
{
    selectCard(card: Card | undefined): void;

    playCard(index?: number, target?: Card): void;
}