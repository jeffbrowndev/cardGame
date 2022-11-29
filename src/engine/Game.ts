import { IActionManager } from "./interfaces/IActionManager";
import { IGame } from "./interfaces/IGame";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";
import { UserInput } from "./types/UserInput";

export class Game implements IGame
{
    private actionMananger: IActionManager;
    private sceneRenderer: ISceneRenderer;

    public constructor(actionManager: IActionManager, sceneRenderer: ISceneRenderer)
    {
        this.sceneRenderer = sceneRenderer;
        this.actionMananger = actionManager;
        
        document.addEventListener("userInput", event => 
        {
            this.update((<CustomEvent>event).detail);
        });
    }

    private update(input: UserInput): void
    {
        this.actionMananger.handleClick(input);

        this.render();
    }

    public render(): void
    {
        this.sceneRenderer.update();
    }
}