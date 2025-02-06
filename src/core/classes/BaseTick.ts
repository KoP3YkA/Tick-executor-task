/**
 * Base class representing a generic time unit, which can be multiplied by a factor and used to calculate an integer value.
 */
export class BaseTick {

    public static CLOCK_CYCLE : BaseTick = new BaseTick(1, 1);
    public static TICK = (count: number) => new BaseTick(count, 50);
    public static SECOND = (count: number) => new BaseTick(count, 1000);
    public static MINUTE = (count: number) => new BaseTick(count, 1000 * 60);
    public static HOUR = (count: number) => new BaseTick(count, 1000 * 60 * 60);
    public static DAY = (count: number) => new BaseTick(count, 1000 * 60 * 60 * 24);

    // ---------------------------------------------

    public constructor(
        public count : number,
        public multiply : number,
    ) {}

    public calculate() : number {
        return this.count * this.multiply;
    }

}