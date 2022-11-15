import { CardClass } from "./types/CardClass";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { PlayerState } from "./PlayerState";
import { RenderUtility } from "./RenderUtility";

export class SceneRenderer implements ISceneRenderer
{
    private handRow: HTMLElement;
    private activeRow: HTMLElement;
    private playerScore: HTMLElement;

    public constructor(handRow: HTMLElement, activeRow: HTMLElement, playerScore: HTMLElement)
    {
        this.handRow = handRow;
        this.activeRow = activeRow;
        this.playerScore = playerScore;
    }

    public update(playerState: PlayerState): void
    {
        this.renderRow(this.handRow, playerState.hand);
        this.renderRow(this.activeRow, playerState.active);
        this.renderPlayerScore(playerState.score);
    }

    private renderRow(row: HTMLElement, cards: Array<CardClass>): void
    {
        const overlap = RenderUtility.getOverlap(cards.length);

        cards.forEach((card, index) => 
        {
            card.updateHtml();

            if (index > 0) 
            {
                card.setOverlap(overlap);
            }

            row.appendChild(card);
        });
    }

    private renderPlayerScore(score: number): void
    {
        this.playerScore.innerText = score.toString();
    }
}