import { ICard } from "./interfaces/ICard";
import { CardType } from "./types/CardType";

export class Card extends HTMLElement implements ICard 
{
    private _type: CardType;
    private _selected = false;

    public constructor(type: CardType)
    {
        super();

        this._type = type;
    }

    public get cardType(): CardType
    {
        return this._type;
    }

    public setOverlap(amount: number): void
    {
        this.style.marginLeft = Math.ceil(amount).toString();
    }

    public toggleSelected(): void
    {
        this._selected = !this._selected;

        this._selected ? this.classList.add("selected") : this.classList.remove("selected");
    }
}