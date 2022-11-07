import { Card } from "./Card";
import { PlayerState } from "./PlayerState";
import { RenderUtility } from "./RenderUtility";

export class SceneRenderer
{
    private static playerHand = document.getElementById("playerHand");

    public static renderState(playerState: PlayerState): void
    {
        this.renderRow(this.playerHand, playerState.currentHand);
    }

    private static renderRow(row: HTMLElement | null, cards: Array<Card>): void
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

    public static hideElement(element: HTMLElement | null): void
    {
        if (element)
        {
            element.style.display = "none";
        }
    }
}