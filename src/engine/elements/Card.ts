import { AbilityMap } from "../factories/AbilityMap";
import { ICard } from "../interfaces/ICard";
import { IAbility } from "../interfaces/IAbility";
import { Class, TCard } from "../types/TDeck";

export class Card extends HTMLElement implements ICard
{
    public readonly name: string;
    public readonly class: Class;
    public readonly ability?: IAbility;
    public readonly baseValue?: number;
    public readonly description: string;
    public index?: number;
    public dependentBoost = 0;
    public fixedBoost = 0;

    public constructor(data: TCard)
    {
        super();
        
        this.name = data.name;
        this.class = data.class;
        this.baseValue = data.baseValue;
        this.ability = AbilityMap.mapAbility(this, data.ability);
        this.description = data.description;

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

    public getCardType(): string
    {
        if (this.parentElement?.className === "playerSlot")
        {
            return "activeCard";
        }
        else if (this.parentElement?.className === "botSlot")
        {
            return "botActiveCard";
        }
        else if (this.parentElement?.id === "botHand")
        {
            return "botInactive";
        }

        return "inactiveCard";
    }

    public get value(): number
    {
        return (this.baseValue ?? 0) + this.fixedBoost + this.dependentBoost;
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
        this.dependentBoost = 0;
    }
}