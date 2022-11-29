import { Card } from "../elements/Card";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class BoostAdjacent implements IModifier
{
    public async run(cardInPlay: Card): Promise<void>
    {
        const index = cardInPlay.index!;

        playerState.active.forEach(card => 
        {
            if (card.index === (index + 1) || card.index === (index - 1))
            {
                card.dependentBoost += cardInPlay.value;
            }
        });
    }
}