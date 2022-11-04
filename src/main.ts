import { DeckFactory } from "./factories/DeckFactory";
import { GameboardFactory } from "./factories/GameboardFactory";
import { Game } from "./Game";

const gameBoardType = document.getElementById("gameBoardType") as HTMLSelectElement;
const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame");

startGame!.addEventListener("click", () => 
{
  const gameBoard = GameboardFactory.getGameBoard(gameBoardType.value);
  const deck = DeckFactory.getDeck(deckType.value);

  const game = new Game();

  game.start(gameBoard, deck);
});

