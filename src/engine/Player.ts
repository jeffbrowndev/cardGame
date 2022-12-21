import { IPlayer } from "./interfaces/IPlayer";
import { Card } from "./elements/Card";
import { PostPlay } from "./PostPlay";
import { gameState } from "./GameState";

export class Player implements IPlayer
{
    public get state()
    {
        return gameState.player!;
    }

    public selectCard(card: Card): void
    {
        this.state.selected = card;
    }

    public playTurn(card: Card): void
    {
        this.playCard(card);

        PostPlay.run();
    }

    private playCard(card: Card): void
    {   
        if (card.class === "utility")
        {
            gameState.abilityQueue.push(card.ability!);
        }
        else
        {
            this.state.active.push(card);
        }

        this.state.hand.splice(this.state.hand.indexOf(card), 1);

        this.state.selected = undefined;
    }
}