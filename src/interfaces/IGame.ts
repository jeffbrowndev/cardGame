import { IDeck } from "./IDeck";
import { IGameBoard } from "./IGameBoard";

export interface IGame
{
    start(gameBoard: IGameBoard, deck: IDeck): void;
    stop(): void;
}