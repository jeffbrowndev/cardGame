import "./styles/main.css";

import { Deck } from "./engine/Deck";
import { DeckFactory } from "./engine/factories/DeckFactory";
import { Game } from "./engine/Game";
import { DeckType } from "./engine/types/DeckType";
import { CardFactory } from "./engine/factories/CardFactory";
import { Card } from "./engine/Card";
import { PlayerState } from "./engine/PlayerState";
import { SceneRenderer } from "./engine/SceneRenderer";
import { ActionManager } from "./engine/ActionManager";
import { Player } from "./engine/Player";

customElements.define("card-element", Card);

const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame");
const hand = document.getElementById("playerHand")!;
const active = document.getElementById("playerActiveCards")!;
const playerScore = document.getElementById("playerScore")!;

startGame!.addEventListener("click", function()
{
  const deckChosen = DeckFactory.getDeck(deckType.value as DeckType);
  const cards = deckChosen.map(cardType => CardFactory.getCard(cardType));
  const deck = new Deck(cards);
  const playerState = new PlayerState(deck);
  const player = new Player(playerState);
  const sceneRenderer = new SceneRenderer(hand, active, playerScore); 
  const actionMananger = new ActionManager(player, active);
  const game = new Game(player, actionMananger, sceneRenderer);

  game.render();

  document.getElementById("startOptions")!.style.display = "none";
});