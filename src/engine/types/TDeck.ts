export type TDeck = Array<TCard>

export type TCard = {
    name: string,
    class: Class,
    baseValue: number,
    modifier?: Modifier,
    description: string,
}

export type Class = "standard" | "abilityStandard" | "utility";

export type Modifier = "rowBoost" | "targetBoost" | "draw" | "boostAdjacent" | "attack";