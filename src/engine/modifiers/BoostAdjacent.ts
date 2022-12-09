import { Card } from "../elements/Card";
import { IModifier } from "../interfaces/IModifier";
import { IPlayerState } from "../interfaces/IPlayerState";

export class BoostAdjacent implements IModifier
{
    public run(state: IPlayerState, cardInPlay: Card): void
    {
        const index = cardInPlay.index!;

        state.active.forEach(card => 
        {
            if (card.index === (index + 1) || card.index === (index - 1))
            {
                card.dependentBoost += cardInPlay.value;         
            }
        });
    }
}