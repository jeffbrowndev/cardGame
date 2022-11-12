import { IActionManager } from "./interfaces/IActionManager";
import { IGame } from "./interfaces/IGame";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { Player } from "./Player";

export class Game implements IGame
{
    private player: Player;
    private actionMananger: IActionManager;
    private sceneRenderer: ISceneRenderer;

    public constructor(player: Player, actionManager: IActionManager, sceneRenderer: ISceneRenderer)
    {
        this.sceneRenderer = sceneRenderer;
        this.player = player;
        this.actionMananger = actionManager;
        
        document.onclick = (e) => this.update(e.target);
    }

    private update(element: EventTarget | null): void
    {
        this.actionMananger.handleClick(element);

        this.render();
    }

    public render(): void
    {
        this.sceneRenderer.update(this.player.playerState);
    }
}