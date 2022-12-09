import { Card } from "../elements/Card";
import { IModifier } from "../interfaces/IModifier";
import { IPlayerState } from "../interfaces/IPlayerState";

export class Attack implements IModifier
{
    public requiresTarget = true;

    public run(state: IPlayerState, cardInPlay: Card): void
    {
        if (!state.target)
        {
            return;
        }

        state.target.fixedBoost -= (state.active.length - 1);

        if (state.target.value <= 0)
        {
            state.discard(state.target);
        }

        state.discard(cardInPlay);
    }
}