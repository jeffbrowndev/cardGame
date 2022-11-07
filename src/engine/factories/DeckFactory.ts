import { StandardDeck } from "../decks/StandardDeck";
import { CardType } from "../types/CardType";
import { DeckType } from "../types/DeckType";

export class DeckFactory
{
    public static getDeck(type: DeckType): Array<CardType>
    {
        switch(type)
        {
            case "Standard":
                return StandardDeck;
        }
    }
}