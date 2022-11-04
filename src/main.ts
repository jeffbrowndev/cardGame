import { DeckFactory } from "./factories/DeckFactory";
import { GameBoardFactory } from "./factories/GameboardFactory";
import { Game } from "./Game";
import { DeckType } from "./types/DeckType";
import { GameBoardType } from "./types/GameBoardType";

const gameBoardType = document.getElementById("gameBoardType") as HTMLSelectElement;
const deckType = document.getElementById("deckType") as HTMLSelectElement;
const startGame = document.getElementById("startGame");

startGame!.addEventListener("click", () => 
{
  const gameBoard = GameBoardFactory.getGameBoard(gameBoardType.value as GameBoardType);
  const deck = DeckFactory.getDeck(deckType.value as DeckType);

  const game = new Game();

  game.start(gameBoard, deck);
});