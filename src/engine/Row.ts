import { UserInput } from "./types/UserInput";

export class Row extends HTMLElement
{
    public constructor()
    {
        super();

        this.onclick = () => 
        {
            const event = new CustomEvent("userInput", 
            { 
                detail: {
                    type: this.id,
                } as UserInput
            });
            
            document.dispatchEvent(event);
        };
    }
}