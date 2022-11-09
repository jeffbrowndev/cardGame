import { IActionManager } from "./interfaces/IActionManager";
import { IGame } from "./interfaces/IGame";
import { IPlayerState } from "./interfaces/IPlayerState";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";

export class Game implements IGame
{
    private actionMananger: IActionManager;
    private sceneRenderer: ISceneRenderer;
    private playerState: IPlayerState;

    public constructor(sceneRenderer: ISceneRenderer, playerState: IPlayerState, actionManager: IActionManager)
    {
        this.sceneRenderer = sceneRenderer;
        this.playerState = playerState;
        this.actionMananger = actionManager;

        document.onclick = (event) => this.update(event);
    }

    public start(): void
    {
        this.render();
    }

    private update(event: MouseEvent): void
    {
        this.actionMananger.handleEvent(event);

        this.render();
    }

    private render(): void
    {
        this.sceneRenderer.update(this.playerState);
    }
}