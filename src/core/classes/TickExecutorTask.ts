import {BaseTick} from "./BaseTick";

/**
 * Class that manages a periodic task execution with a specified count and duration.
 * The task is executed periodically based on the count and can be stopped after a duration.
 */
export class TickExecutorTask {

    private timeout!: number;
    private cancelHandler!: () => void;

    /**
     * Creates an instance of the TickExecutorTask.
     * @param {number | BaseTick} count The interval between task executions (in milliseconds or custom time unit).
     * @param {Function} run The function to be executed periodically.
     * @param {boolean} [forceStart=true] If true, the task will start immediately.
     * @param {number | BaseTick} [duration] The maximum duration the task will run (optional).
     */
    public constructor(
        private count: number | BaseTick,
        private run: (stop: () => void) => void,
        private forceStart: boolean = true,
        private duration?: number | BaseTick,
    ) {
        if (forceStart) this.start();
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
     * Starts the task execution with periodic intervals.
     */
    public start() : void {
        const timeout = setInterval(
            () => this.run(this.stop.bind(this)),
            this.getInteger(this.count)
        );
        this.timeout = timeout[Symbol.toPrimitive]();

        if (this.duration) {
            setTimeout(this.stop, this.getInteger(this.duration))
        }
    }

    /**
     * Stops the periodic task execution.
     */
    public stop() : void {
        clearInterval(this.timeout);
        if (this.cancelHandler) this.cancelHandler();
    }

    /**
     * Sets a cancel handler function to be executed when the task is stopped.
     * @param {Function} cancelHandler The function to call on cancellation.
     */
    public handleCancel(cancelHandler: () => void) : void {
        this.cancelHandler = cancelHandler;
    }

}