import { Card } from "./elements/Card";
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
                return this.attemptTurn(input.index, input.target);
        }
    }

    private attemptTurn(index: number, target?: Card): void
    {
        if (!this.player.state.selected)
        {
            return;       
        }

        if (this.requiresTarget() && !target)
        {
            return;
        }

        this.player.state.target = target;

        this.player.state.selected.index = index;

        this.player.playTurn(this.player.state.selected);
    }

    private requiresTarget(): boolean | undefined
    {
        return this.player.state.selected?.modifier?.requiresTarget;
    }
}