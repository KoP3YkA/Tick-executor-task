/**
 * Base class representing a generic time unit, which can be multiplied by a factor and used to calculate an integer value.
 */
export abstract class BaseTick {
    /**
     * Multiplier factor for the time.
     * @abstract
     */
    public abstract multiply : number;

    /**
     * Time value.
     * @abstract
     */
    public abstract time : number;

    /**
     * Calculates the integer value by multiplying the time with the multiplier.
     * @returns {number} The resulting integer value.
     */
    public toInteger() : number {
        return this.multiply * this.time;
    }

}