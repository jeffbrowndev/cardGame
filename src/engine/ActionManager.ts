import { IActionManager } from "./interfaces/IActionManager";
import { IPlayerState } from "./interfaces/IPlayerState";

export class ActionManager implements IActionManager
{
    private playerState: IPlayerState;

    public constructor(playerState: IPlayerState)
    {
        this.playerState = playerState;
    }

    public handleEvent(event: any): void
    {
        if (event.target.cardType)
        {
            console.log(`click on card ${event.target.cardType}`);
        }

        if (event.target.id === "playerActiveCards")
        {
            console.log("clicked on player active row");
        }
    }
}