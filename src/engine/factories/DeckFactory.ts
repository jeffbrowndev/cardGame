import { TDeck } from "../types/TDeck";
import { DeckType } from "../types/DeckType";

const standard = require("../decks/standardDeck.json");

export class DeckFactory
{
    public static getDeck(type: DeckType): TDeck
    {
        switch(type)
        {
            case "Standard":
                return standard.deck;
        }
    }
}