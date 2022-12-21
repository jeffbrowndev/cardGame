import { gameState } from "../GameState";
import { IAbility } from "../interfaces/IAbility";

export class TargetBoost implements IAbility
{
    public targetType = "player";
    public priority = 1;

    public run(): void
    {
        const target = gameState.player.target!;

        target.fixedBoost += 5;
    }
}