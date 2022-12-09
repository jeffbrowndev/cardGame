import { Card } from "../elements/Card";
import { IPlayerState } from "./IPlayerState";

export interface IPlayer
{
    state: IPlayerState;
    
    selectCard(card: Card): void;

    playTurn(card: Card): void;
}