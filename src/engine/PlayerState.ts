import { Card } from "./Card";
import { IDeck } from "./interfaces/IDeck";

export class PlayerState
{
    private deck: IDeck;
    private hand: Array<Card>;

    public constructor(deck: IDeck) 
    {
        this.deck = deck;
        this.hand = this.deck.draw(10);
    }

    public get currentHand()
    {
        return this.hand;
    }
}