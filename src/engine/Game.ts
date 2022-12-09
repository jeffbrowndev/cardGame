import { Bot } from "./Bot";
import { GameManager } from "./GameManager";
import { gameState } from "./GameState";
import { IActionManager } from "./interfaces/IActionManager";
import { IGame } from "./interfaces/IGame";
import { ISceneRenderer } from "./interfaces/ISceneRenderer";

export class Game implements IGame
{
    private actionMananger: IActionManager;
    private sceneRenderer: ISceneRenderer;
    private bot: Bot;

    public constructor(actionManager: IActionManager, sceneRenderer: ISceneRenderer, bot: Bot)
    {
        this.sceneRenderer = sceneRenderer;
        this.actionMananger = actionManager;
        this.bot = bot;
        
        document.addEventListener("userInput", event => 
        {
            if (gameState.isPlayerTurn)
            {
                this.update((<CustomEvent>event).detail);
            }
        });

        document.addEventListener("botTurn", () => this.runBot());
    }

    public start(): void
    {
        GameManager.coinToss();

        this.render();
    }

    private update(input: any): void
    {
        this.actionMananger.handleClick(input);

        this.render();
    }

    private async runBot(): Promise<void>
    {
        await this.bot.simulate();

        this.render();
    }

    private render(): void
    {
        this.sceneRenderer.render();
    }
}