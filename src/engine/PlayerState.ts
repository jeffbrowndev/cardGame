import { CardClass } from "./types/CardClass";
import { IDeck } from "./interfaces/IDeck";

export class PlayerState
{
    private _deck: IDeck;
    private _hand: Array<CardClass>;
    private _active = Array<CardClass>();
    private _discardPile = Array<CardClass>();
    private _selected?: CardClass;
    private _score: number;

    public constructor(deck: IDeck)
    {
        this._deck = deck;
        this._hand = this.deck.draw(10);
        this._score = 0;
    }

    public get hand(): Array<CardClass>
    {
        return this._hand;
    }

    public get discardPile(): Array<CardClass>
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

    public get active(): Array<CardClass>
    {
        return this._active;
    }

    public get selected(): CardClass | undefined
    {
        return this._selected;
    }

    public set selected(card: CardClass | undefined)
    {
        this.selected?.unselect();

        if (card)
        {
            card.select();
        }

        this._selected = card;
    }

    private get deck(): IDeck
    {
        return this._deck;
    }
}