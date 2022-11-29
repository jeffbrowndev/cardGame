import { Card } from "../elements/Card";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class RowBoost implements IModifier
{
    public run(cardInPlay: Card): void
    {
        const index = cardInPlay.index!

        playerState.active.forEach(card => 
        {
            if (card === cardInPlay || card.index === undefined)
            {
                return;
            }

            if (card.index < index)
            {
                card.dependentBoost += 1;
            }
        });
    }
}