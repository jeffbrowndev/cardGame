import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class TargetBoost implements IModifier
{
    public requiresTarget = true;

    public run(): void
    {
        if (playerState.target?.value)
        {
            playerState.target.value += 5;
        }
    }
}