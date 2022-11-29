import { IActionManager } from "./interfaces/IActionManager";
import { Player } from "./Player";

export class ActionManager implements IActionManager
{
    private player: Player;

    public constructor(player: Player)
    {
        this.player = player;
    }

    public handleClick(input: any): void
    {
        switch (input.type)
        {
            case "inactiveCard":
                return this.player.selectCard(input.target);
            case "cardSlot":
            case "activeCard":
                return this.player.playCard(input.index, input.target);
        }
    }
}