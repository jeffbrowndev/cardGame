import { CardClass } from "../types/CardClass";
import { Booster } from "../cards/Booster";
import { Tank } from "../cards/Tank";
import { CardType } from "../types/CardType";
import { Weakling } from "../cards/Weakling";
import { Potion } from "../cards/Potion";

export class CardFactory
{
    public static getCard(type: CardType): CardClass
    {
        switch (type)
        {
            case "tank":
                return new Tank();
            case "weakling":
                return new Weakling();
            case "booster":
                return new Booster();
            case "potion":
                return new Potion();
        }
    }
}