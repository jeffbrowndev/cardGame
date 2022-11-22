export type TDeck = Array<TCard>

export type TCard = {
    name: Name,
    class: Class,
    baseValue?: number,
    modifier?: Modifier
}

export type Class = "standard" | "abilityStandard" | "utility"

export type Name = "tank" | "weakling" | "booster" | "potion" | "comrad";

export type Modifier = "rowBoost" | "targetBoost" | "draw";