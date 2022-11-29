import { Card } from "../elements/Card";
import { GameManager } from "../GameManager";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class TargetBoost implements IModifier
{
    public requiresTarget = true;

    public run(cardInPlay: Card): void
    {
        if (playerState.target)
        {
            playerState.target.fixedBoost += 5;

            GameManager.discard(cardInPlay);
        }
    }
}