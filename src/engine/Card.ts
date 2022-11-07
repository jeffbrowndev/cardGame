import { ICard } from "./interfaces/ICard";
import { CardType } from "./types/CardType";

export class Card extends HTMLElement implements ICard 
{
    private type: CardType;

    public constructor(type: CardType)
    {
        super();

        this.type = type;
        this.classList.add("card");
        this.innerHTML = `<p>${type}</p>`

        this.addEventListener("click", () => console.log(this.type));
    }

    public get cardType(): CardType
    {
        return this.type;
    }

    public setOverlap(amount: number): void
    {
        this.style.marginLeft = Math.ceil(amount).toString();
    }
}