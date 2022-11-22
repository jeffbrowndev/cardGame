import { Card } from "../Card";
import { IModifier } from "../interfaces/IModifier";
import { playerState } from "../PlayerState";

export class Draw implements IModifier
{
    public add(): void
    {
        playerState.deck?.draw(playerState.hand, 1);
    }

    public run(card: Card): void
    {
        return;
    }
}