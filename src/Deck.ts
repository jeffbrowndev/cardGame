import { IDeck } from "./interfaces/IDeck";

export class Deck implements IDeck
{
    private type: string;

    public constructor(type: string)
    {
        this.type = type;
    }
}