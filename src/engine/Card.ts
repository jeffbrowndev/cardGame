import { ModifierMap } from "./factories/ModifierMap";
import { IModifier } from "./interfaces/IModifier";
import { Class, Name, TCard } from "./types/TDeck";

export class Card extends HTMLElement
{
    private readonly _name: Name;
    private readonly _class: Class;
    private readonly _modifier?: IModifier;
    private readonly _baseValue?: number;
    private _value?: number;
    private _controllers = new Set<IModifier>;

    public constructor(data: TCard)
    {
        super();
        
        this._name = data.name;
        this._class = data.class;
        this._baseValue = data.baseValue;
        this._value = this.baseValue;
        this._modifier = ModifierMap.mapModifier(data.modifier);

        this.classList.add("card");
    }

    public get class(): Class
    {
        return this._class;
    }

    public get controllers(): Set<IModifier>
    {
        return this._controllers;
    }

    public get modifier(): IModifier | undefined
    {
        return this._modifier;
    }

    public get name(): Name
    {
        return this._name;
    }

    private get baseValue(): number | undefined
    {
        return this._baseValue;
    }

    public get value(): number | undefined
    {
        return this._value;
    }

    public set value(value: number | undefined)
    {
        this._value = value;

        if (this.value && this.baseValue && this.value > this.baseValue)
        {
            this.style.color = "green";
        }
    }

    public select(): void
    {
        this.classList.add("selected");
    }

    public unselect(): void
    {
        this.classList.remove("selected");
    }

    public reset(): void
    {
        this.value = this.baseValue;
    }

    public setOverlap(amount: number): void
    {
        this.style.marginLeft = amount.toString();
    }

    public addModifier(): void
    {
        this.modifier?.add();
    }

    public runControllers(card: Card): void
    {
        this.controllers.forEach(controller => controller.run(card));
    }
}