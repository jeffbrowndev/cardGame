import { Booster } from "../cards/Booster";
import { Potion } from "../cards/Potion";
import { Tank } from "../cards/Tank";
import { Weakling } from "../cards/Weakling";

export type CardClass = 
    Booster | 
    Weakling |
    Tank |
    Potion;