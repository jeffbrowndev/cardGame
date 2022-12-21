import { IAbility } from "../interfaces/IAbility";
import { Attack } from "../abilities/Attack";
import { BoostAdjacent } from "../abilities/BoostAdjacent";
import { Draw } from "../abilities/Draw";
import { RowBoost } from "../abilities/RowBoost";
import { TargetBoost } from "../abilities/TargetBoost";
import { Ability } from "../types/TDeck";
import { Card } from "../elements/Card";

export class AbilityMap
{
    public static mapAbility(card: Card, ability?: Ability): IAbility | undefined
    {
        if (!ability)
        {
            return undefined;
        }

        switch (ability)
        {
            case "rowBoost":
                return new RowBoost(card);
            case "targetBoost":
                return new TargetBoost();
            case "draw":
                return new Draw();
            case "boostAdjacent":
                return new BoostAdjacent(card);
            case "attack": 
                return new Attack();
        }
    }
}