import "./styles/main.css";
import "./engine/CustomElementDefinitions";

import { Deck } from "./engine/Deck";
import { DeckFactory } from "./engine/factories/DeckFactory";
import { Game } from "./engine/Game";
import { DeckType } from "./engine/types/DeckType";
import { playerState } from "./engine/PlayerState";
import { SceneRenderer } from "./engine/SceneRenderer";
import { ActionManager } from "./engine/ActionManager";
import { Player } from "./engine/Player";
import { Card } from "./engine/elements/Card";
import { CardSlot } from "./engine/elements/CardSlot";

const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame")!;
const hand = document.getElementById("playerHand")!;
const activeSlots = Array.from(document.getElementsByTagName("card-slot")) as Array<CardSlot>;
const playerScore = document.getElementById("playerScore")!;

startGame.addEventListener("click", () =>
{
  const deckChosen = DeckFactory.getDeck(deckType.value as DeckType);
  const cards = deckChosen.map(card => new Card(card));  
  const deck = new Deck(cards);

  playerState.initializeState(deck);

  const player = new Player();
  const sceneRenderer = new SceneRenderer(hand, activeSlots, playerScore); 
  const actionMananger = new ActionManager(player);
  const game = new Game(actionMananger, sceneRenderer);

  game.render();

  document.getElementById("startOptions")!.style.display = "none";
});