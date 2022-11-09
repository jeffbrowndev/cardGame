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

customElements.define("card-element", Card);

const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame");
const hand = document.getElementById("playerHand");
const active = document.getElementById("playerActiveCards");

startGame!.addEventListener("click", () => 
{
  const deckChosen = DeckFactory.getDeck(deckType.value as DeckType);
  const cards = deckChosen.map(cardType => CardFactory.getCard(cardType));
  const deck = new Deck(cards);
  const playerState = new PlayerState(deck);
  const sceneRenderer = new SceneRenderer(hand!, active!); 
  const actionMananger = new ActionManager(playerState);
  const game = new Game(sceneRenderer, playerState, actionMananger);

  game.start();
});