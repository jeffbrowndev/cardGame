import { gameState } from "../GameState";
import { IAbility } from "../interfaces/IAbility";

export class Attack implements IAbility
{
    public targetType = "enemy";
    public priority = 1;

    public run(): void
    {
        const active = gameState.player.active;
        const target = gameState.player.target!;

        target.fixedBoost -= active.length;

        if (target.value <= 0)
        {
            gameState.opponent.discard(target);
        }
    }
}