import { gameState } from "./GameState";
import { IPlayerState } from "./interfaces/IPlayerState";
import { Player } from "./Player";

export class Bot extends Player
{
    private slots = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    public constructor(state: IPlayerState)
    {
        super(state);
    }

    public async simulate(): Promise<void>
    {
        await this.delay(1000);

        this.selectRandomCard();

        if (!this.state.selected)
        {
            return;
        }

        this.selectRandomAvailableSlot();

        await this.delay(1000);

        this.playTurn(this.state.selected);

        this.endTurn();
    }

    public selectRandomCard(): void
    {
        const card = this.state.hand[Math.floor(Math.random() * this.state.hand.length)];

        this.selectCard(card);
    }

    public selectRandomAvailableSlot(): void
    {
        const index = Math.floor(Math.random() * this.slots.length);

        const slot = this.slots[index];

        this.state.selected!.index = slot;

        this.slots.splice(index, 1);
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
