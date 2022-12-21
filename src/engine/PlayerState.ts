import { Card } from "./elements/Card";
import { IAbility } from "./interfaces/IAbility";
import { IDeck } from "./interfaces/IDeck";
import { IPlayerState } from "./interfaces/IPlayerState";

export class PlayerState implements IPlayerState
{
    public hand = Array<Card>();
    public active = Array<Card>();
    public discardPile = Array<Card>();
    public target: Card | undefined;
    public score = 0;
    public deck?: IDeck;
    
    private _selected?: Card;
    
    public constructor(deck: IDeck)
    {
        this.deck = deck;

        this.initializeState();
    }

    public initializeState(): void
    {
        this.deck?.draw(this.hand, 10);
    }

    public get selected(): Card | undefined
    {
        return this._selected;
    }

    public set selected(card: Card | undefined)
    {
        this.selected?.unselect();

        card?.select();

        this._selected = card;
    }

    public discard(card: Card): void
    {
        const index = this.active.indexOf(card);

        this.active.splice(index, 1);
        
        this.discardPile.push(card);
    }
}