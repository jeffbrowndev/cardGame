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
            case "botActiveCard":
                return this.attemptTurn(input.index, input.target, input.type);
        }
    }

    private attemptTurn(index: number, target?: Card, type?: any): void
    {
        if (!this.player.state.selected)
        {
            return;       
        }

        if (this.targetType() && !target)
        {
            return;
        }

        if (this.enemyTargetRequired() && type !== "botActiveCard")
        {
            return;
        }

        if (this.playerTargetRequired() && type !== "activeCard")
        {
            return;
        }

        if (!this.targetType() && type !== "cardSlot")
        {
            return;
        }

        this.player.state.target = target;

        this.player.state.selected.index = index;

        this.player.playTurn(this.player.state.selected);
    }

    private enemyTargetRequired(): boolean
    {
        return this.targetType() === "enemy";
    }

    private playerTargetRequired(): boolean
    {
        return this.targetType() === "player";
    }

    private targetType(): string | undefined
    {
        return this.player.state.selected?.ability?.targetType;
    }
}