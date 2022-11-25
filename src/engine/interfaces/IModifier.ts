export interface IModifier
{
    requiresTarget?: boolean

    run(): void;
}