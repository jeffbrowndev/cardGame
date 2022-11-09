import { Card } from "./Card";
import { IDeck } from "./interfaces/IDeck";

export class PlayerState
{
    private _deck: IDeck;
    private _hand: Array<Card>;
    private _active = Array<Card>();
    private _selected = Card;

    public constructor(deck: IDeck)
    {
        this._deck = deck;
        this._hand = this.deck.draw(10);
    }

    public get hand(): Array<Card>
    {
        return this._hand;
    }

    public get active(): Array<Card>
    {
        return this._active;
    }

    private get deck(): IDeck
    {
        return this._deck;
    }

    public get selected(): Card
    {
        return this.selected;
    }
}