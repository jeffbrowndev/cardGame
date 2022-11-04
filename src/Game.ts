import { IDeck } from "./interfaces/IDeck";
import { IGameBoard } from "./interfaces/IGameBoard";

export class Game 
{
    public start(gameBoard: IGameBoard, deck: IDeck): void
    {
        console.log(gameBoard, deck);
    }

    public stop(): void
    {
        console.log("stopping game");
    }
}