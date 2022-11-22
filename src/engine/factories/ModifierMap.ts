import { IModifier } from "../interfaces/IModifier";
import { Draw } from "../modifiers/Draw";
import { RowBoost } from "../modifiers/RowBoost";
import { TargetBoost } from "../modifiers/TargetBoost";
import { Modifier } from "../types/TDeck";

export class ModifierMap
{
    public static mapModifier(modifier?: Modifier): IModifier | undefined
    {
        if (!modifier)
        {
            return undefined;
        }

        switch (modifier)
        {
            case "rowBoost":
                return new RowBoost();
            case "targetBoost":
                return new TargetBoost();
            case "draw":
                return new Draw();
        }
    }
}