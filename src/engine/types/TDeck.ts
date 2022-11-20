export type TDeck = Array<TCard>

export type TCard = {
    name: Name,
    class: Class,
    baseValue?: number,
    modifiers?: Array<Modifier>
}

export type Class = "standard" | "abilityStandard" | "utility"

export type Name = "tank" | "weakling" | "booster" | "potion";

export type Modifier = "rowBoost" | "targetBoost"