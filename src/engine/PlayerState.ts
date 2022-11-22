import { Card } from "./Card";
import { IDeck } from "./interfaces/IDeck";

class PlayerState
{
    private _deck?: IDeck;
    private _hand = Array<Card>();
    private _active = Array<Card>();
    private _discardPile = Array<Card>();
    private _selected?: Card;
    private _target?: Card;
    private _score = 0;

    public initializeState(deck: IDeck): void
    {
        this.deck = deck;
        this.deck.draw(this.hand, 4);
    }

    public get hand(): Array<Card>
    {
        return this._hand;
    }

    public get discardPile(): Array<Card>
    {
        return this._discardPile;
    }

    public get score(): number
    {
        return this._score;
    }

    public set score(score: number)
    {
        this._score = score;
    }

    public get active(): Array<Card>
    {
        return this._active;
    }

    public get target(): Card | undefined
    {
        return this._target;
    }

    public set target(target: Card | undefined)
    {
        this._target = target;
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

    public set deck(deck: IDeck | undefined)
    {
        this._deck = deck;
    }

    public get deck(): IDeck | undefined
    {
        return this._deck;
    }
}

export const playerState = new PlayerState();