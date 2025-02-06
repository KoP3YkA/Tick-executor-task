import {BaseTick} from "./BaseTick";

/**
 * Class representing time in seconds. Inherits from BaseTick.
 * The multiplier is 1000 (seconds to milliseconds).
 */
export class Second extends BaseTick {
    public multiply: number = 1000;
    public time: number;

    /**
     * Creates an instance of the Second class.
     * @param {number} time The time value in seconds.
     */
    public constructor(time: number) {
        super();
        this.time = time;
    }

}