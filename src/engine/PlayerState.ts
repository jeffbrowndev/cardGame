import { Card } from "./Card";
import { IDeck } from "./interfaces/IDeck";

export class PlayerState
{
    private _deck: IDeck;
    private _hand: Array<Card>;
    private _active = Array<Card>();
    private _selected?: Card;
    private _score: number;

    public constructor(deck: IDeck)
    {
        this._deck = deck;
        this._hand = this.deck.draw(10);
        this._score = 0;
    }

    public get hand(): Array<Card>
    {
        return this._hand;
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

    public get selected(): Card | undefined
    {
        return this._selected;
    }

    public set selected(card: Card | undefined)
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

    public setScore(): void
    {
        this.score = this.active.reduce((score, card) => score + card.value, 0);
    }
}