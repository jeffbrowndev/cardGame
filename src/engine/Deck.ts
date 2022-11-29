import { Card } from "./elements/Card";
import { IDeck } from "./interfaces/IDeck";

export class Deck implements IDeck
{
    private deck: Array<Card>;

    public constructor(deck: Array<Card>)
    {
        this.deck = deck;

        this.shuffle();
    }

    private shuffle(): void
    {
        for (var i = this.deck.length - 1; i > 0; i--) 
        {
            const swapIndex = Math.floor(Math.random() * (i + 1))
            const currentCard = this.deck[i]
            const cardToSwap = this.deck[swapIndex]
            this.deck[i] = cardToSwap
            this.deck[swapIndex] = currentCard
        }
    }

    public draw(hand: Array<Card>, count: number): void
    {
        hand.push(...this.deck.splice(0, count));
    }
}