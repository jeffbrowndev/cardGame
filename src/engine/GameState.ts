import { IAbility } from "./interfaces/IAbility";
import { IPlayerState } from "./interfaces/IPlayerState";

class GameState
{
    private _isPlayerTurn = false;
    public player!: IPlayerState;
    public opponent!: IPlayerState;
    public abilityQueue = Array<IAbility>();
    
    public get isPlayerTurn(): boolean
    {
        return this._isPlayerTurn;
    }

    public setPlayerStates(player: IPlayerState, opponent: IPlayerState): void
    {
        this.player = player;

        this.opponent = opponent;
    }

    public switchActivePlayer(): void
    {
        const temp = this.player;

        this.player = this.opponent;

        this.opponent = temp;
    }

    public set isPlayerTurn(playerTurn: boolean)
    {
        this._isPlayerTurn = playerTurn;

        if (!playerTurn)
        {   
            document.dispatchEvent(new Event("botTurn"));
        }
    }

    public queueAbility(ability: IAbility): void
    {
        this.abilityQueue.push(ability);
        
        this.abilityQueue.sort((a, b) => a.priority - b.priority);
    }
}

export const gameState = new GameState();