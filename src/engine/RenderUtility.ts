export class RenderUtility
{
    public static getOverlap(count: number): number
    {
        if (count > 10)
        {
            const cardsToShift = count - 1;

            return (1125 - (cardsToShift * 150)) / cardsToShift;
        }
        else 
        {
            return -25;
        }
    }
}