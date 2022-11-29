export class CardSlot extends HTMLElement
{
    public constructor()
    {
        super();

        this.onclick = () => 
        {
            const event = new CustomEvent("userInput", 
            { 
                detail: {
                    type: "cardSlot",
                    index: Number(this.dataset.index)
                }
            });
            
            document.dispatchEvent(event);
        };
    }
}