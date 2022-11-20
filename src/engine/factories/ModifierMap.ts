import { IModifier } from "../interfaces/IModifier";
import { RowBoost } from "../modifiers/RowBoost";
import { TargetBoost } from "../modifiers/TargetBoost";
import { Modifier } from "../types/TDeck";

export class ModifierMap
{
    public static mapModifiers(modifiers?: Array<Modifier>): Array<IModifier> | undefined
    {
        if (!modifiers)
        {
            return undefined;
        }

        return modifiers.map(modifier => 
        {
            switch (modifier)
            {
                case "rowBoost":
                    return new RowBoost();
                case "targetBoost":
                    return new TargetBoost();
            }
        })
    }
}