export class GameboardFactory
{
    public static getGameBoard(type: string): string | undefined
    {
        switch(type)
        {
            case "Standard":
                return "standard"
        }
    }
}