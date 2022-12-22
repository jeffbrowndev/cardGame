import { gameState } from "./GameState";
import { IPlayerState } from "./interfaces/IPlayerState";

export class PostPlay
{
    public static run(): void
    {        
        this.runAbilityQueue();

        this.setScore(gameState.player);
        
        this.setScore(gameState.opponent);

        this.endTurn();
    }

    private static runAbilityQueue(): void
    {
        gameState.player.active.forEach(card => 
        {
            card.reset()

            if (card.ability)
            {
                gameState.queueAbility(card.ability);
            }
        });

        gameState.abilityQueue.forEach(ability => ability.run());

        gameState.abilityQueue.length = 0;
    }

    private static endTurn(): void
    {
        gameState.isPlayerTurn = !gameState.isPlayerTurn;

        gameState.switchActivePlayer();
    }

    private static setScore(state: IPlayerState): void
    {
        state.score = state.active.reduce((score, card) => score + (card.value ?? 0), 0);
    }
}