import "./styles/main.css";

import { Deck } from "./engine/Deck";
import { DeckFactory } from "./engine/factories/DeckFactory";
import { Game } from "./engine/Game";
import { DeckType } from "./engine/types/DeckType";
import { SceneRenderer } from "./engine/SceneRenderer";
import { CardFactory } from "./engine/factories/CardFactory";
import { Card } from "./engine/Card";

customElements.define("card-element", Card);

const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame");
const startOptionsModal = document.getElementById("startOptions");

startGame!.addEventListener("click", () => 
{
  const deck = DeckFactory.getDeck(deckType.value as DeckType);
  const cards = deck.map(cardType => CardFactory.getCard(cardType));
  
  SceneRenderer.hideElement(startOptionsModal);

  const game = new Game(new Deck(cards));

  game.start();
});