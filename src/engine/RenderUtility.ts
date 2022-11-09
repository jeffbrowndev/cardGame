export class RenderUtility
{
    public static getOverlap(count: number): number
    {
        if (count > 10)
        {
            return -(150 - (1275 / (count + 1)));
        }

        return -25;
    }
}