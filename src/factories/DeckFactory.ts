export class DeckFactory
{
    public static getDeck(type: string): string | undefined
    {
        switch(type)
        {
            case "Standard":
                return "standard"
        }
    }
}