import { gameState } from "./GameState";
import { IPlayerState } from "./interfaces/IPlayerState";
import { Player } from "./Player";

export class Bot extends Player
{
    private slots = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    public constructor()
    {
        super();
    }

    public async simulate(): Promise<void>
    {
        await this.delay(1000);

        this.selectAndPlayRandomCard();

        document.dispatchEvent(new Event("botInput"));

        if (!this.state.selected)
        {
            return;
        }

        await this.delay(2000);

        this.playTurn(this.state.selected);

        this.endTurn();
    }

    public selectAndPlayRandomCard(): void
    {
        const card = this.state.hand[Math.floor(Math.random() * this.state.hand.length)];

        if (card.class === "utility" && this.state.active.length < 1)
        {
            return this.selectAndPlayRandomCard();
        }

        this.selectCard(card);

        if (card.class === "utility" && this.state.active.length)
        {
            if (card.ability?.targetType === "enemy")
            {
                return this.selectRandomActiveCard(gameState.opponent);
            }

            this.selectRandomActiveCard(this.state);
        }
        else
        {
            this.selectRandomAvailableSlot();
        }
    }

    public selectRandomAvailableSlot(): void
    {
        const index = Math.floor(Math.random() * this.slots.length);

        const slot = this.slots[index];

        this.state.selected!.index = slot;

        this.slots.splice(index, 1);
    }

    public selectRandomActiveCard(state: IPlayerState): void
    {
        const index = Math.floor(Math.random() * state.active.length);

        const card = state.active[index];

        this.state.target = card;
    }

    public endTurn(): void
    {
        gameState.isPlayerTurn = true;
    }

    private async delay(ms: number): Promise<void>
    {
        await new Promise(e => setTimeout(e, ms));
    }
}
