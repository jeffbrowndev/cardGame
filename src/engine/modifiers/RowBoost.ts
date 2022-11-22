import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class RowBoost implements IModifier
{
    public run(): void
    {
        playerState.active.forEach(card => 
        {
            if (card.modifier !== this && card.value)
            {
                card.value += 1;
            }
        })
    }
}