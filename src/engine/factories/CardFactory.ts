import { Card } from "../Card";
import { CardType } from "../types/CardType";

export class CardFactory
{
    public static getCard(type: CardType)
    {
        switch (type)
        {
            case "a":
                return new Card("a");
            case "b":
                return new Card("b");
            case "c":
                return new Card("c");
            case "d":
                return new Card("d");
            case "e":
                return new Card("e");
            case "f":
                return new Card("f");
            case "g":
                return new Card("g");
            case "h":
                return new Card("h");
            case "i":
                return new Card("i")
            case "j":
                return new Card("j") 
            case "k":
                return new Card("k") 
            case "l":
                return new Card("l") 
            case "m":
                return new Card("m") 
            case "n":
                return new Card("n") 
            case "o":
                return new Card("o") 
            case "p":
                return new Card("p") 
            case "q":
                return new Card("q") 
            case "r":
                return new Card("r") 
            case "s":
                return new Card("s") 
            case "t":
                return new Card("t") 
            case "u":
                return new Card("u") 
            case "v":
                return new Card("v") 
            case "w":
                return new Card("w") 
            case "x":
                return new Card("x") 
            case "y":
                return new Card("y") 
            case "z":
                return new Card("z") 
        }
    }
}