import { IPlayer } from "./interfaces/IPlayer";
import { GameManager } from "./GameManager";
import { Card } from "./elements/Card";
import { playerState } from "./PlayerState";

export class Player implements IPlayer
{
    public selectCard(card: Card | undefined): void
    {
        playerState.selected = card;
    }

    public playCard(index?: number, target?: Card): void
    {   
        playerState.target = target;

        if (!playerState.selected)
        {
            return;
        }

        if (playerState.selected.modifier?.requiresTarget && !target)
        {
            return;
        }

        if (!playerState.selected.modifier?.requiresTarget && target)
        {
            return;
        }

        playerState.active.unshift(playerState.selected);
        playerState.selected.style.marginLeft = "0";
        playerState.hand.splice(playerState.hand.indexOf(playerState.selected), 1);
        playerState.selected.select();
        playerState.selected.index = index;
        playerState.selected.runModifier();
        playerState.selected = undefined;

        GameManager.runAllModifiers();
        GameManager.setScore();
    }
}