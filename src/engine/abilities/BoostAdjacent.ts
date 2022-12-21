import { Card } from "../elements/Card";
import { gameState } from "../GameState";
import { IAbility } from "../interfaces/IAbility";

export class BoostAdjacent implements IAbility
{    
    public priority = 2;
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
            if (activeCard.index === (index + 1) || activeCard.index === (index - 1))
            {
                activeCard.dependentBoost += this.card.value;       
            }
        });
    }
}