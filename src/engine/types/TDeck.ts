export type TDeck = Array<TCard>

export type TCard = {
    name: string,
    class: Class,
    baseValue: number,
    ability?: Ability,
    description: string,
}

export type Class = "standard" | "abilityStandard" | "utility";

export type Ability = "rowBoost" | "targetBoost" | "draw" | "boostAdjacent" | "attack";