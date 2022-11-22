import { ModifierMap } from "./factories/ModifierMap";
import { GameManager } from "./GameManager";
import { IModifier } from "./interfaces/IModifier";
import { Class, Name, TCard } from "./types/TDeck";

export class Card extends HTMLElement
{
    private readonly _name: Name;
    private readonly _class: Class;
    private readonly _modifier?: IModifier;
    private readonly _baseValue?: number;
    private readonly _description: string;
    private _value?: number;

    public constructor(data: TCard)
    {
        super();
        
        this._name = data.name;
        this._class = data.class;
        this._baseValue = data.baseValue;
        this._value = this.baseValue;
        this._modifier = ModifierMap.mapModifier(data.modifier);
        this._description = data.description;

        this.classList.add("card");
    }

    public get class(): Class
    {
        return this._class;
    }

    public get description(): string
    {
        return this._description;
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
            this.classList.add("aboveBaseValue");
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

    public runModifier(): void
    {
        this.modifier?.run();

        if (this.class === "utility")
        {
            GameManager.discard(this);
        }
    }
}