import { Card } from "../elements/Card";
import { IModifier } from "../interfaces/IModifier";
import { IPlayerState } from "../interfaces/IPlayerState";

export class TargetBoost implements IModifier
{
    public requiresTarget = true;

    public run(state: IPlayerState, cardInPlay: Card): void
    {
        if (state.target)
        {
            state.target.fixedBoost += 5;

            state.discard(cardInPlay);
        }
    }
}