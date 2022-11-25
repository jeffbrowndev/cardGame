import { UserInput } from "../types/UserInput";

export interface IActionManager
{
    handleClick(target: UserInput): void;
}