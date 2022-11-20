import { IPlayer } from "./interfaces/IPlayer";
import { PlayerState } from "./PlayerState";
import { GameManager } from "./GameManager";
import { Card } from "./Card";

export class Player implements IPlayer
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

    public selectCard(card: Card | undefined): void
    {
        this.playerState.selected = card;
    }

    public playCard(target?: Card)
    {
        if (this.playerState.selected)
        {
            this.playerState.active.push(this.playerState.selected);
            this.playerState.selected.style.marginLeft = "0";
            this.playerState.hand.splice(this.playerState.hand.indexOf(this.playerState.selected), 1);
            this.playerState.selected.unselect();
            this.playerState.selected = undefined;
            
            GameManager.addModifiers(this.playerState.active, target);
            GameManager.runControllers(this.playerState.active);
            
            this.playerState.score = GameManager.setScore(this.playerState);
        }
    }
}