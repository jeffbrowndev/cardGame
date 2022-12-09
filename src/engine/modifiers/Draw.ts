import { IModifier } from "../interfaces/IModifier";
import { IPlayerState } from "../interfaces/IPlayerState";

export class Draw implements IModifier
{
    public run(state: IPlayerState): void
    {
        state.deck?.draw(state.hand, 1);
    }
}