## Tick executor task

`Tick executor task` is a JavaScript/TypeScript library that provides an easy way to manage periodic task execution with customizable intervals and optional duration limits. It helps you execute tasks at specified intervals, stop them after a given duration, and even cancel them if needed.

### Usage

**Basic Example**

The ``TickExecutorTask`` class accepts a time interval and a function to be executed periodically.

```typescript
// Create a task that runs every 1000 milliseconds (1 second)
const task = new TickExecutorTask(BaseTick.SECOND(1), (stop) => {
    console.log("Executing task...");
    // Stop the task after 5 seconds
    new TickTimer(BaseTick.SECOND(5), stop)
});
```

**Cancelling Tasks**

You can cancel tasks by setting a cancel handler.

```typescript
const task = new TickExecutorTask(1000, (stop) => {
    console.log("Executing task...");
    // Cancel the task after 3 seconds
    new TickTimer(BaseTick.SECOND(3), stop)
});

task.handleCancel(() => {
    console.log('Cancelled!'); 
});
```

**With duration**

You can specify a duration after which the task will stop automatically.

```typescript
const task = new TickExecutorTask(BaseTick.SECOND(1), (stop) => {
    console.log("Executing task...");
}, true, BaseTick.SECOND(5));  // Stops after 5 seconds
```

