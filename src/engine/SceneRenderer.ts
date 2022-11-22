import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { RenderUtility } from "./RenderUtility";
import { Card } from "./Card";
import { playerState } from "./PlayerState";

export class SceneRenderer implements ISceneRenderer
{
    private handRow: HTMLElement;
    private activeRow: HTMLElement;
    private playerScore: HTMLElement;

    public constructor
    (
        handRow: HTMLElement, 
        activeRow: HTMLElement, 
        playerScore: HTMLElement
    )
    {
        this.handRow = handRow;
        this.activeRow = activeRow;
        this.playerScore = playerScore;
    }

    public update(): void
    {
        this.renderRow(this.handRow, playerState.hand);
        this.renderRow(this.activeRow, playerState.active);
        this.renderPlayerScore(playerState.score);
    }

    private renderRow(row: HTMLElement, cards: Array<Card>): void
    {
        const overlap = RenderUtility.getOverlap(cards.length);

        row.innerHTML = "";

        cards.forEach((card, index) => 
        {
            this.updateHtml(card);

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

    private updateHtml(card: Card): void
    {
        card.innerHTML = 
           `<h2 class='cardValue'>${card.value ?? 0}</h2>
            <h4>${card.name}</h4>
            <p>${card.description}</p>`;
    }
}