import { Card } from "./Card";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { PlayerState } from "./PlayerState";
import { RenderUtility } from "./RenderUtility";

export class SceneRenderer implements ISceneRenderer
{
    private _handRow: HTMLElement;
    private _activeRow: HTMLElement;

    public constructor(handRow: HTMLElement, activeRow: HTMLElement)
    {
        this._handRow = handRow;
        this._activeRow = activeRow;

        this.hideElement(document.getElementById("startOptions"));
    }

    private get handRow(): HTMLElement
    {
        return this._handRow;
    }

    private get activeRow(): HTMLElement
    {
        return this._activeRow;
    }

    public update(playerState: PlayerState): void
    {
        this.renderRow(this.handRow, playerState.hand);
        this.renderRow(this.activeRow, playerState.active);
    }

    private renderRow(row: HTMLElement | null, cards: Array<Card>): void
    {
        const shiftAmount = RenderUtility.getOverlap(cards.length);

        cards.forEach((card, index) => 
        {
            if (index > 0) 
            {
                card.setOverlap(shiftAmount);
            }

            row?.appendChild(card);
        });
    }

    public hideElement(element: HTMLElement | null): void
    {
        if (element)
        {
            element.style.display = "none";
        }
    }
}