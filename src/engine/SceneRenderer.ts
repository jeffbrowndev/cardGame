import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { Card } from "./elements/Card";
import { CardSlot } from "./elements/CardSlot";
import { gameState } from "./GameState";
import { IPlayerState } from "./interfaces/IPlayerState";
import * as elements from "./Elements";

export class SceneRenderer implements ISceneRenderer
{
    private playerHand = elements.playerHand;
    private playerActive = elements.playerActive;
    private playerScore = elements.playerScore;
    private botHand = elements.botHand;
    private botActive = elements.botActive;
    private botScore = elements.botScore;
    private turn = elements.turn;
    private playerState: IPlayerState;
    private botState: IPlayerState;

    public constructor(playerState: IPlayerState, botState: IPlayerState)
    {
        this.playerState = playerState;
        this.botState = botState;
    }

    public render(): void
    {
        this.renderHand(this.playerHand, this.playerState.hand);
        this.renderActive(this.playerActive, this.playerState.active);
        this.renderPlayerScore(this.playerScore, this.playerState.score);

        this.renderHand(this.botHand, this.botState.hand);
        this.renderActive(this.botActive, this.botState.active);    
        this.renderPlayerScore(this.botScore, this.botState.score);
        
        this.renderTurn();
    }

    private renderHand(row: HTMLElement, cards: Array<Card>): void
    {
        row.innerHTML = "";

        cards.forEach(card => 
        {
            row.appendChild(card);

            if (card.getCardType() !== "botInactive")
            {
                this.renderCard(card);
            }
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

    private renderPlayerScore(element: HTMLElement, score: number): void
    {
        element.innerText = score.toString();
    }

    private renderCard(card: Card): void
    {
        this.setColor(card);

        card.innerHTML = 
           `<h2 class='cardValue'>${card.baseValue ? card.value : ""}</h2>
            <div class='description'>
                <h4>${card.name}</h4>
                <p>${card.description}</p>
            </div>`;
    }

    private setColor(card: Card): void
    {
        if (!card.baseValue)
        {
            return;
        }

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
    
    private renderTurn(): void
    {
        this.turn.innerText = gameState.isPlayerTurn ? "YOUR TURN" : "BOT TURN";
    }
}