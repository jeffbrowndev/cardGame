import { Card } from "./Card";
import { IActionManager } from "./interfaces/IActionManager";
import { Player } from "./Player";
import { PlayerState } from "./PlayerState";

export class ActionManager implements IActionManager
{
    private player: Player;
    private playerActiveRow: HTMLElement;
    private playerHandRow: HTMLElement;

    public constructor(player: Player, playerActiveRow: HTMLElement, playerHandRow: HTMLElement)
    {
        this.player = player;
        this.playerActiveRow = playerActiveRow;
        this.playerHandRow = playerHandRow;
    }

    private get playerState(): PlayerState
    {
        return this.player.playerState;
    }

    public handleClick(element: EventTarget): void
    {
        if (this.clickedCardInHand(element as Card))
        {
            let card: Card | undefined;

            if (this.playerState.selected !== element as Card)
            {
                card = element as Card;

                this.playerActiveRow.classList.add("ready");
            }
            else
            {
                this.playerActiveRow.classList.remove("ready");
            }

            this.player.selectCard(card);
        }

        if (this.clickedActiveCard(element as HTMLElement))
        {
            this.player.playCard(element as Card);
        }

        if (this.clickedActiveRow(element as HTMLElement))
        {
            this.player.playCard();
        }
    }

    private clickedCardInHand(card: Card): boolean
    {
        return card.classList.contains("card") && card.parentElement === this.playerHandRow;
    }

    private clickedActiveCard(row: HTMLElement): boolean
    {
        return row.parentElement === this.playerActiveRow;
    }

    private clickedActiveRow(row: HTMLElement): boolean
    {
        return row === this.playerActiveRow;
    }
}