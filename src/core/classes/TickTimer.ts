import {BaseTick} from "./BaseTick";

/**
 * Class for managing a single delayed task execution with an optional cancellation mechanism.
 * The task is executed once after a specified timeout.
 */
export class TickTimer {

    private cancelled : boolean = false;

    /**
     * Creates an instance of TickTimer.
     * @param {number | BaseTick} timeoutTime The timeout time in milliseconds or custom time unit.
     * @param {Function} run The function to execute when the timeout occurs.
     * @param {boolean} [forceStart=true] If true, the task will start immediately.
     */
    public constructor(
        private timeoutTime : number | BaseTick,
        private run : () => void,
        private forceStart : boolean = true,
    ) {
        if (this.forceStart) setTimeout(this.start, this.getInteger(timeoutTime))
    }

    /**
     * Converts a time value (either number or BaseTick) to its integer representation.
     * @param {number | BaseTick} t The time value to convert.
     * @returns {number} The integer representation of the time.
     */
    private getInteger(t: number | BaseTick) : number {
        return t instanceof BaseTick ? t.toInteger() : t;
    }

    /**
     * Starts the task execution. If the task is not cancelled, the provided run function will be called.
     */
    public start() : void {
        if (!this.cancelled) this.run();
    }

    /**
     * Cancels the task execution, preventing the run function from being called.
     */
    public cancel() : void {
        this.cancelled = !this.cancelled;
    }

}