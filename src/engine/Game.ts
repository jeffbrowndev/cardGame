import { IActionManager } from "./interfaces/IActionManager";
import { IGame } from "./interfaces/IGame";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";

export class Game implements IGame
{
    private actionMananger: IActionManager;
    private sceneRenderer: ISceneRenderer;

    public constructor(actionManager: IActionManager, sceneRenderer: ISceneRenderer)
    {
        this.sceneRenderer = sceneRenderer;
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
        this.sceneRenderer.update();
    }
}