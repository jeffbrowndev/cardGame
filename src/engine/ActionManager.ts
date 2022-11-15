import { IActionManager } from "./interfaces/IActionManager";
import { Player } from "./Player";
import { PlayerState } from "./PlayerState";
import { CardClass } from "./types/CardClass";

export class ActionManager implements IActionManager
{
    private player: Player;
    private playerActiveRow: HTMLElement;

    public constructor(player: Player, playerActiveRow: HTMLElement)
    {
        this.player = player;
        this.playerActiveRow = playerActiveRow;
    }

    private get playerState(): PlayerState
    {
        return this.player.playerState;
    }

    public handleClick(element: EventTarget | null): void
    {
        if (this.clickedCardInHand(element as CardClass))
        {
            let card: CardClass | undefined;

            if (this.playerState.selected !== element as CardClass)
            {
                card = element as CardClass;

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
            this.player.playCard();
        }

        if (this.clickedActiveRow(element as HTMLElement))
        {
            this.player.playCard();
        }
    }

    private clickedCardInHand(card: CardClass): boolean
    {
        return card.classList.contains("card") && !card.active;
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