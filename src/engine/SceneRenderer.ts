import { Card } from "./Card";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { PlayerState } from "./PlayerState";
import { RenderUtility } from "./RenderUtility";

export class SceneRenderer implements ISceneRenderer
{
    private _handRow: HTMLElement;
    private _activeRow: HTMLElement;
    private _playerScore: HTMLElement;

    public constructor(handRow: HTMLElement, activeRow: HTMLElement, playerScore: HTMLElement)
    {
        this._handRow = handRow;
        this._activeRow = activeRow;
        this._playerScore = playerScore;
    }

    private get handRow(): HTMLElement
    {
        return this._handRow;
    }

    private get activeRow(): HTMLElement
    {
        return this._activeRow;
    }

    private get playerScore(): HTMLElement
    {
        return this._playerScore;
    }

    public update(playerState: PlayerState): void
    {
        this.renderRow(this.handRow, playerState.hand);
        this.renderRow(this.activeRow, playerState.active);
        this.renderPlayerScore(playerState.score);
    }

    private renderRow(row: HTMLElement | null, cards: Array<Card>): void
    {
        const overlap = RenderUtility.getOverlap(cards.length);

        cards.forEach((card, index) => 
        {
            if (index > 0) 
            {
                card.setOverlap(overlap);
            }

            row?.appendChild(card);
        });
    }

    private renderPlayerScore(score: number): void
    {
        this.playerScore.innerText = score.toString();
    }
}