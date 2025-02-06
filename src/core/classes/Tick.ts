import {BaseTick} from "./BaseTick";

/**
 * Class representing a generic tick. Inherits from BaseTick.
 * The multiplier is 50.
 */
export class Tick extends BaseTick {
    public multiply: number = 50;
    public time: number;

    /**
     * Creates an instance of the Tick class.
     * @param {number} time The time value in ticks.
     */
    public constructor(time: number) {
        super();
        this.time = time;
    }

}