import { Card } from "./Card";
import { PlayerState } from "./PlayerState";

export class Player
{
    private _playerState: PlayerState;

    public constructor(playerState: PlayerState)
    {
        this._playerState = playerState;
    }

    public get playerState(): PlayerState
    {
        return this._playerState;
    }

    public selectCard(card: Card): void
    {
        if (this.playerState.selected === card)
        {
            this.playerState.selected = undefined;
        }
        else
        {
            this.playerState.selected = card;
        }
    }

    public playCard(): void
    {
        if (this.playerState.selected)
        {
            this.playerState.active.push(this.playerState.selected);

            this.playerState.selected.active = true;

            this.playerState.selected.style.marginLeft = "0";

            this.playerState.hand.splice(this.playerState.hand.indexOf(this.playerState.selected), 1);

            this.playerState.selected.unselect();
            
            this.playerState.selected = undefined;

            this.playerState.setScore();
        }
    }
}