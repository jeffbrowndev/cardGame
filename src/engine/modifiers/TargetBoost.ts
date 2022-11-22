import { Card } from "../Card";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class TargetBoost implements IModifier
{
    public add(): void
    {
        playerState.target?.controllers.add(this);
    }

    public run(card: Card): void
    {
        card.value! += 5;
    }
}