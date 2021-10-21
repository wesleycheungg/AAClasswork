const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
    rl.question(`Is ${el1} > ${el2}? `, response => {
        if (response === "yes") {
            callback(true);
        } else if (response === "no") {
            callback(false);
        } else {
            throw new Error ("Please enter 'yes' or 'no'");
        }
        rl.close();
    })
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
        if (i === arr.length - 1) {
            outerBubbleSortLoop(madeAnySwaps);
        } else {
            askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
                if (isGreaterThan === true) {
                    arr[i], arr[i + 1] = arr[i + 1], arr[i];
                    madeAnySwaps = true;
                    innerBubbleSortLoop(arr, i++, madeAnySwaps, outerBubbleSortLoop);
                } else {
                    innerBubbleSortLoop(arr, i++, madeAnySwaps, outerBubbleSortLoop);
                }
                
            })
        }
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            return arr
        }
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

// askIfGreaterThan(1, 2, result => console.log(`${result}`))

innerBubbleSortLoop([3,1,5,2,6], 4, false, function(){console.log("TEST")});
