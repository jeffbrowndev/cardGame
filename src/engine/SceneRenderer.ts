import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { GameUtility } from "./GameUtility";
import { playerState } from "./PlayerState";
import { Card } from "./elements/Card";
import { CardSlot } from "./elements/CardSlot";

export class SceneRenderer implements ISceneRenderer
{
    private handRow: HTMLElement;
    private activeSlots: Array<CardSlot>;
    private playerScore: HTMLElement;

    public constructor
    (
        handRow: HTMLElement, 
        activeSlots: Array<CardSlot>, 
        playerScore: HTMLElement
    )
    {
        this.handRow = handRow;
        this.activeSlots = activeSlots;
        this.playerScore = playerScore;
    }

    public update(): void
    {
        this.renderHand(this.handRow, playerState.hand);

        this.renderActive(this.activeSlots, playerState.active);
        
        this.renderPlayerScore(playerState.score);
    }

    private renderHand(row: HTMLElement, cards: Array<Card>): void
    {
        const overlap = GameUtility.getOverlap(cards.length);

        row.innerHTML = "";

        cards.forEach((card, index) => 
        {
            this.renderCard(card);

            if (index > 0) 
            {
                card.setOverlap(overlap);
            }

            row.appendChild(card);
        });
    }

    private renderActive(slots: Array<CardSlot>, cards: Array<Card>): void
    {
        slots.forEach(slot => slot.innerHTML = "");

        cards.forEach(card => 
        {
            this.renderCard(card);

            if (card.index !== undefined)
            {
                slots[card.index].appendChild(card);
            }
        });
    }

    private renderPlayerScore(score: number): void
    {
        this.playerScore.innerText = score.toString();
    }

    private renderCard(card: Card): void
    {
        if (card.baseValue)
        {
            if (card.value > card.baseValue)
            {
                card.classList.add("aboveBaseValue");
            }
            else if (card.value < card.baseValue)
            {
                card.classList.add("belowBaseValue");
            }
            else
            {
                card.classList.remove("aboveBaseValue", "belowBaseValue");
            }
        }

        card.innerHTML = 
           `<h2 class='cardValue'>${card.baseValue ? card.value : ""}</h2>
            <div class='description'>
                <h4>${card.name}</h4>
                <p>${card.description}</p>
            </div>`;
    }
}