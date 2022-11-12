import { Card } from "./Card";
import { IActionManager } from "./interfaces/IActionManager";
import { Player } from "./Player";

export class ActionManager implements IActionManager
{
    private _player: Player;
    private _playerActiveRow: HTMLElement;

    public constructor(player: Player, playerActiveRow: HTMLElement)
    {
        this._player = player;
        this._playerActiveRow = playerActiveRow;
    }

    private get player(): Player
    {
        return this._player;
    }

    private get playerActiveRow(): HTMLElement
    {
        return this._playerActiveRow;
    }

    public handleClick(element: EventTarget | null): void
    {
        if (this.clickedCardInHand(element as Card))
        {
            this.player.selectCard(element as Card);
        }

        if (this.clickedActiveCard(element as HTMLElement))
        {
            this.playCardIfSelected();
        }

        if (this.clickedActiveRow(element as HTMLElement))
        {
            this.playCardIfSelected();
        }
    }

    private clickedCardInHand(card: Card): boolean
    {
        return card.cardType && !card.active;
    }

    private clickedActiveCard(row: HTMLElement): boolean
    {
        return row.parentElement === this.playerActiveRow;
    }

    private clickedActiveRow(row: HTMLElement): boolean
    {
        return row === this.playerActiveRow;
    }

    private playCardIfSelected(): void
    {
        if (this.player.playerState.selected)
        {
            this.player.playCard();
        }
    }
}