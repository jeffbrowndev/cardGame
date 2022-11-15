import { IDeck } from "./interfaces/IDeck";
import { CardClass } from "./types/CardClass";

export class Deck implements IDeck
{
    private cards: Array<CardClass>;

    public constructor(cards: Array<CardClass>)
    {
        this.cards = cards;

        this.shuffle();
    }

    private shuffle(): void
    {
        for (var i = this.cards.length - 1; i > 0; i--) 
        {
            const swapIndex = Math.floor(Math.random() * (i + 1))
            const currentCard = this.cards[i]
            const cardToSwap = this.cards[swapIndex]
            this.cards[i] = cardToSwap
            this.cards[swapIndex] = currentCard
        }
    }

    public draw(count: number): Array<CardClass>
    {
        return this.cards.splice(0, count);
    }
}