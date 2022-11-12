import { PlayerState } from "../PlayerState";

export interface ISceneRenderer
{
    update(playerState: PlayerState): void;
}