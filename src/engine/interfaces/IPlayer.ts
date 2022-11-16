import { PlayerState } from "../PlayerState";
import { CardClass } from "../types/CardClass";

export interface IPlayer
{
    get playerState(): PlayerState;

    selectCard(card: CardClass | undefined): void;

    playCard(target: CardClass): void;
}