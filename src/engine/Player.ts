import { IPlayer } from "./interfaces/IPlayer";
import { Card } from "./elements/Card";
import { IPlayerState } from "./interfaces/IPlayerState";
import { PostPlay } from "./PostPlay";

export class Player implements IPlayer
{
    public state: IPlayerState;

    public constructor(state: IPlayerState)
    {
        this.state = state;
    }

    public selectCard(card: Card): void
    {
        this.state.selected = card;
    }

    public playTurn(card: Card): void
    {
        this.playCard(card);

        PostPlay.run(this.state);
    }

    private playCard(card: Card): void
    {   
        this.state.active.push(card);

        this.state.hand.splice(this.state.hand.indexOf(card), 1);
        
        card.modifier?.run(this.state, card);

        this.state.selected = undefined;
    }
}