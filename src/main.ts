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
import { Card } from "./engine/Card";

const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame");
const hand = document.getElementById("playerHand")!;
const activeRow = document.getElementById("playerActiveCards")!;
const playerScore = document.getElementById("playerScore")!;

startGame!.addEventListener("click", function()
{
  const deckChosen = DeckFactory.getDeck(deckType.value as DeckType);
  const cards = deckChosen.map(card => new Card(card));  
  const deck = new Deck(cards);

  playerState.initializeState(deck);

  const player = new Player();
  const sceneRenderer = new SceneRenderer(hand, activeRow, playerScore); 
  const actionMananger = new ActionManager(player);
  const game = new Game(actionMananger, sceneRenderer);

  game.render();

  document.getElementById("startOptions")!.style.display = "none";
});
