import { Card } from "../elements/Card";
import { IModifier } from "../interfaces/IModifier";
import { IPlayerState } from "../interfaces/IPlayerState";

export class RowBoost implements IModifier
{
    public run(state: IPlayerState, cardInPlay: Card): void
    {
        const index = cardInPlay.index!

        state.active.forEach(card => 
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