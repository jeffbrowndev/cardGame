import { gameState } from "../GameState";
import { IAbility } from "../interfaces/IAbility";

export class Draw implements IAbility
{
    public priority = 1;
    
    public run(): void
    {
        const deck = gameState.player.deck;

        deck?.draw(gameState.player.hand, 1);
    }
}