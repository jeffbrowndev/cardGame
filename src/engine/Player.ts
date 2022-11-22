import { IPlayer } from "./interfaces/IPlayer";
import { GameManager } from "./GameManager";
import { Card } from "./Card";
import { playerState } from "./PlayerState";

export class Player implements IPlayer
{
    public selectCard(card: Card | undefined): void
    {
        playerState.selected = card;
    }

    public playCard(): void
    {
        if (!playerState.selected)
        {
            return;
        }

        playerState.active.push(playerState.selected);
        playerState.selected.style.marginLeft = "0";
        playerState.hand.splice(playerState.hand.indexOf(playerState.selected), 1);
        playerState.selected.unselect();
        
        GameManager.addModifiers();
        GameManager.runControllers();
        GameManager.setScore();

        playerState.selected = undefined;
    }
}