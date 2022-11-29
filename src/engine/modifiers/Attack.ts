import { Card } from "../elements/Card";
import { GameManager } from "../GameManager";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class Attack implements IModifier
{
    public requiresTarget = true;

    public run(cardInPlay: Card): void
    {
        if (!playerState.target)
        {
            return;
        }

        playerState.target.fixedBoost -= (playerState.active.length - 1);

        if (playerState.target.value <= 0)
        {
            GameManager.discard(playerState.target);
        }

        GameManager.discard(cardInPlay);
    }
}