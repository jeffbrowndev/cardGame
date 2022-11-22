import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class Draw implements IModifier
{
    public run(): void
    {
        playerState.deck?.draw(playerState.hand, 1);
    }
}