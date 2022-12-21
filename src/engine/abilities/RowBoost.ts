import { Card } from "../elements/Card";
import { gameState } from "../GameState";
import { IAbility } from "../interfaces/IAbility";

export class RowBoost implements IAbility
{
    public priority = 1;
    public card: Card;

    public constructor(card: Card)
    {
        this.card = card;
    }

    public run(): void
    {
        const index = this.card.index!;
        const active = gameState.player.active;

        active.forEach(activeCard => 
        {
            if (activeCard === this.card || activeCard.index === undefined)
            {
                return;
            }

            if (activeCard.index < index)
            {
                activeCard.dependentBoost += 1;
            }
        });
    }
}