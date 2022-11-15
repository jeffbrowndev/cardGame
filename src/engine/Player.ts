import { CardClass } from "./types/CardClass";
import { IPlayer } from "./interfaces/IPlayer";
import { PlayerState } from "./PlayerState";

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

    public selectCard(card: CardClass | undefined): void
    {
        this.playerState.selected = card;
    }

    public playCard()
    {
        if (this.playerState.selected)
        {
            this.playerState.active.push(this.playerState.selected);

            this.playerState.selected.active = true;

            this.playerState.selected.style.marginLeft = "0";

            this.playerState.hand.splice(this.playerState.hand.indexOf(this.playerState.selected), 1);

            this.playerState.selected.unselect();
            
            this.playerState.selected = undefined;

            this.addModifiers(this.playerState.active);
            
            this.runModifiers(this.playerState.active);

            this.playerState.setScore();
        }
    }

    private addModifiers(cards: Array<CardClass>): void
    {
        cards.forEach(card => card.addModifiers(cards));
    }

    private runModifiers(cards: Array<CardClass>): void
    {
        cards.forEach(card => 
        {
            card.reset();

            card.addModifiers(cards);

            card.modifiers.forEach(modifier => 
            {
                modifier.runModifier(card);
            });
        });
    }
}