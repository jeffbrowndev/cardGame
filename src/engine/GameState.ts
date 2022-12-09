class GameState
{
    private _isPlayerTurn = false;

    public get isPlayerTurn(): boolean
    {
        return this._isPlayerTurn;
    }

    public set isPlayerTurn(playerTurn: boolean)
    {
        this._isPlayerTurn = playerTurn;

        if (!playerTurn)
        {   
            document.dispatchEvent(new Event("botTurn"));
        }
    }
}

export const gameState = new GameState();