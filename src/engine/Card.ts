import { ICard } from "./interfaces/ICard";
import { CardType } from "./types/CardType";

export class Card extends HTMLElement implements ICard 
{
    private _type: CardType;
    private _active = false;
    private _value: number;

    public constructor(type: CardType)
    {
        super();

        this._type = type;
        this._value = Math.floor(Math.random() * 10)

        this.innerHTML = `<h2 class='cardValue'>${this.value.toString()}</h2>`;
    }

    public get cardType(): CardType
    {
        return this._type;
    }

    public get value(): number
    {
        return this._value;
    }

    public get active(): boolean
    {
        return this._active;
    }

    public set active(active: boolean)
    {
        this._active = active;
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
}