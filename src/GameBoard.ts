import { IGameBoard } from "./interfaces/IGameBoard";

export class GameBoard implements IGameBoard
{
    private type: string;

    public constructor(type: string)
    {
        this.type = type;
    }
}