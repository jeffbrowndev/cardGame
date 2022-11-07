import { IDeck } from "./interfaces/IDeck";
import { IGame } from "./interfaces/IGame";
import { PlayerState } from "./PlayerState";
import { SceneRenderer } from "./SceneRenderer";

export class Game implements IGame
{
    private deck: IDeck;

    public constructor(deck: IDeck)
    {
        this.deck = deck;
    }

    public start(): void
    {
        const playerState = new PlayerState(this.deck);

        SceneRenderer.renderState(playerState);
    }
}