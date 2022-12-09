import { CardSlot } from "./elements/CardSlot";

export const deckType = document.getElementById("deckType") as HTMLSelectElement;
export const startGame = document.getElementById("startGame")!;
export const turn = document.getElementById("turn")!;

export const playerHand = document.getElementById("playerHand")!;
export const playerActive = Array.from(document.querySelectorAll("#playerActiveCards card-slot")) as Array<CardSlot>;
export const playerScore = document.getElementById("playerScore")!;

export const botHand = document.getElementById("botHand")!;
export const botActive = Array.from(document.querySelectorAll("#botActiveCards card-slot")) as Array<CardSlot>;
export const botScore = document.getElementById("botScore")!;