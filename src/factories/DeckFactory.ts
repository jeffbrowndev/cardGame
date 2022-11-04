import { Deck } from "../Deck";
import { IDeck } from "../interfaces/IDeck";
import { DeckType } from "../types/DeckType";

export class DeckFactory
{
    public static getDeck(type: DeckType): IDeck
    {
        switch(type)
        {
            case "Standard":
                return new Deck("Standard");
        }
    }
}