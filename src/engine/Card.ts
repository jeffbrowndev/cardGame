import { ICard } from "./interfaces/ICard";
import { CardClass } from "./types/CardClass";

export abstract class Card extends HTMLElement implements ICard
{
    abstract readonly _type: string;
    abstract readonly _baseValue: number;
    abstract _value: number;
    private _modifiers = new Set<CardClass>();

    public constructor()
    {
        super();

        this.classList.add("card");
    }

    public get type(): string
    {
        return this._type;
    }

    public get modifiers(): Set<CardClass>
    {
        return this._modifiers;    
    }

    public get value(): number
    {
        return this._value;
    }

    public set value(value: number)
    {
        this._value = value;

        if (value > this.baseValue)
        {
            this.style.color = "green";
        }
    }

    public get baseValue(): number
    {
        return this._baseValue;
    }

    public setOverlap(amount: number): void
    {
        this.style.marginLeft = amount.toString();
    }

    public select(): void
    {
        this.classList.add("selected");
    }

    public unselect(): void
    {
        this.classList.remove("selected");
    }

    public updateHtml(): void
    {
        this.innerHTML = `<h2 class='cardValue'>${this.value.toString()}</h2>`;
    }

    public reset(): void
    {
        this.value = this.baseValue;
    }

    public abstract addModifiers(cards: Array<CardClass>, target?: CardClass): void;

    public abstract runModifier(card: CardClass): void;
}