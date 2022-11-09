import { IPlayerState } from "./IPlayerState";

export interface ISceneRenderer
{
    update(playerState: IPlayerState): void;
    hideElement(element: HTMLElement | null): void;
}