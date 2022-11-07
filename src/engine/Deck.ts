import { Card } from "./Card";
import { IDeck } from "./interfaces/IDeck";

export class Deck implements IDeck
{
    private cards: Array<Card>;

    public constructor(cards: Array<Card>)
    {
        this.cards = cards;

        this.shuffle();
    }

    get allCards(): Array<Card>
    {
        return this.cards;
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

    public draw(count: number): Array<Card>
    {
        return this.cards.splice(0, count);
    }
}