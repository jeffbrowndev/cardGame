import { GameBoard } from "../GameBoard";
import { IGameBoard } from "../interfaces/IGameBoard";
import { GameBoardType } from "../types/GameBoardType";

export class GameBoardFactory
{
    public static getGameBoard(type: GameBoardType): IGameBoard
    {
        switch(type)
        {
            case "Standard":
                return new GameBoard("Standard");
        }
    }
}