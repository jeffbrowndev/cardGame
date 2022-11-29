import { ModifierMap } from "../factories/ModifierMap";
import { GameManager } from "../GameManager";
import { ICard } from "../interfaces/ICard";
import { IModifier } from "../interfaces/IModifier";
import { Class, TCard } from "../types/TDeck";

export class Card extends HTMLElement implements ICard
{
    private readonly _name: string;
    private readonly _class: Class;
    private readonly _modifier?: IModifier;
    private readonly _baseValue?: number;
    private readonly _description: string;
    private _index?: number;
    private _dependentBoost = 0;
    private _fixedBoost = 0;

    public constructor(data: TCard)
    {
        super();
        
        this._name = data.name;
        this._class = data.class;
        this._baseValue = data.baseValue;
        this._modifier = ModifierMap.mapModifier(data.modifier);
        this._description = data.description;

        this.onclick = (e) => 
        {
            e.stopPropagation();

            const event = new CustomEvent("userInput", 
            {   
                detail: {
                    target: this,
                    type: this.getCardType(),
                }
            });
            
            document.dispatchEvent(event);
        };
    }

    public get fixedBoost(): number
    {
        return this._fixedBoost;
    }

    public set fixedBoost(value: number)
    {
        this._fixedBoost = value;
    }

    public get dependentBoost(): number
    {
        return this._dependentBoost;
    }

    public set dependentBoost(value: number)
    {
        this._dependentBoost = value;
    }

    public get index(): number | undefined
    {
        return this._index;
    }

    public set index(index: number | undefined)
    {
        this._index = index;
    }

    public getCardType(): string
    {
        if (this.parentElement?.tagName === "CARD-SLOT")
        {
            return "activeCard";
        }

        return "inactiveCard";
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

    public get name(): string
    {
        return this._name;
    }

    public get baseValue(): number | undefined
    {
        return this._baseValue;
    }

    public get value(): number
    {
        return (this.baseValue ?? 0) + this.fixedBoost + this.dependentBoost;
    }

    public select(): void
    {
        this.classList.toggle("selected");
    }

    public unselect(): void
    {
        this.classList.remove("selected");
    }

    public reset(): void
    {
        this.dependentBoost = 0;
    }

    public setOverlap(amount: number): void
    {
        this.style.marginLeft = amount.toString();
    }

    public runModifier(): void
    {
        this.modifier?.run(this);
    }
}