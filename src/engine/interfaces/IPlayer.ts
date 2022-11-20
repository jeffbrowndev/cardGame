import { Card } from "../Card";
import { PlayerState } from "../PlayerState";

export interface IPlayer
{
    get playerState(): PlayerState;

    selectCard(card: Card | undefined): void;

    playCard(target: Card): void;
}