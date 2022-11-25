import { IActionManager } from "./interfaces/IActionManager";
import { Player } from "./Player";
import { UserInput } from "./types/UserInput";

export class ActionManager implements IActionManager
{
    private player: Player;

    public constructor(player: Player)
    {
        this.player = player;
    }

    public handleClick(input: UserInput): void
    {
        switch (input.type)
        {
            case "inactiveCard":
                return this.player.selectCard(input.target);
            case "playerActiveCards":
            case "activeCard":
                return this.player.playCard(input.target);
        }
    }
}