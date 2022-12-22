import { gameState } from "./GameState";

export class PostPlay
{
    public static run(): void
    {        
        this.runAbilityQueue();

        this.setScore();

        this.endTurn();

        this.runAbilityQueue();
        
        this.setScore();
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

    private static setScore(): void
    {
        gameState.player.score = gameState.player.active.reduce((score, card) => score + (card.value ?? 0), 0);
    }
}