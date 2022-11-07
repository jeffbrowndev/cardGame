import { IDeck } from "./IDeck";

export interface IGame
{
    start(deck: IDeck): void;
}