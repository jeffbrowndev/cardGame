import "./styles/main.css";
import "./engine/CustomElementDefinitions";

import { Deck } from "./engine/Deck";
import { DeckFactory } from "./engine/factories/DeckFactory";
import { Game } from "./engine/Game";
import { DeckType } from "./engine/types/DeckType";
import { SceneRenderer } from "./engine/SceneRenderer";
import { ActionManager } from "./engine/ActionManager";
import { Player } from "./engine/Player";
import { Card } from "./engine/elements/Card";
import { Bot } from "./engine/Bot";
import { PlayerState } from "./engine/PlayerState";
import { startGame, deckType } from "./engine/Elements";
import { GameManager } from "./engine/GameManager";

startGame.addEventListener("click", () =>
{
  const deckChosen = DeckFactory.getDeck(deckType.value as DeckType);

  const playerCards = deckChosen.map(card => new Card(card));
  const botCards = deckChosen.map(card => new Card(card));

  const playerDeck = new Deck(playerCards);
  const botDeck = new Deck(botCards);

  const playerState = new PlayerState(playerDeck);
  const botState = new PlayerState(botDeck);
  
  const player = new Player();
  const bot = new Bot();

  const sceneRenderer = new SceneRenderer(playerState, botState); 
  const actionMananger = new ActionManager(player);
  const game = new Game(actionMananger, sceneRenderer, bot);

  GameManager.coinToss(playerState, botState);

  game.render();

  document.getElementById("startOptions")!.style.display = "none";
});