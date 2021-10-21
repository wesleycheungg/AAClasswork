class Clock {
    constructor() {
        // 1. Create a Date object.
        let dates = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.hours = dates.getHours();
        this.minutes = dates.getMinutes();
        this.seconds = dates.getSeconds();
        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        // setInterval(function() {
        //     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        // }, 1000);
        // 2. Call printTime.
        this.printTime();
  
    }
}

const clock = new Clock();