import { IActionManager } from "./interfaces/IActionManager";
import { IGame } from "./interfaces/IGame";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { Player } from "./Player";

export class Game implements IGame
{
    private _player: Player;
    private _actionMananger: IActionManager;
    private _sceneRenderer: ISceneRenderer;

    public constructor(player: Player, actionManager: IActionManager, sceneRenderer: ISceneRenderer)
    {
        this._sceneRenderer = sceneRenderer;
        this._player = player;
        this._actionMananger = actionManager;
        
        document.onclick = (e) => this.update(e.target);
    }

    private get player(): Player
    {
        return this._player;
    }

    private update(element: EventTarget | null): void
    {
        this._actionMananger.handleClick(element);

        this.render();
    }

    public render(): void
    {
        this._sceneRenderer.update(this.player.playerState);
    }
}