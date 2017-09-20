// /*
//  * Promises simplify asynchronous programming
//  */

(function() {

    // /* LESSON 1 - Introduction */

    function longRunningFx(timeToTakeInMs) {    
        return new Promise(function(resolve, reject) {
            console.warn("Promise started to wait " + timeToTakeInMs + " milliseconds...");
            setTimeout(function() {
                resolve("Thank you for waiting " + timeToTakeInMs + " milliseconds.");
            }, timeToTakeInMs);            
        });
    }

    longRunningFx(5000).then(function(value) { console.info(value); });
    longRunningFx(1000).then(function(value) { console.info(value); });
    longRunningFx(3000).then(function(value) { console.info(value); });

    // /* LESSON 2 - Promise Chaining (see ex8-arrow-functions first) */

    function addLetter(lastValue, newLetter) {
        return new Promise(resolve => {
            let szNewValue = lastValue + newLetter;
            setTimeout(() => resolve(szNewValue), 250);
        });
    }

    // let szStart = "ABC ";
    // addLetter(szStart, "1")
    //     .then(value => addLetter(value, "2"))
    //     .then(value => addLetter(value, "3"))
    //     .then(value => console.info(value));

    /* LESSON 3 - Handling Errors */

    function addLetter2(lastValue, newLetter) {
        if (newLetter.length != 1) {
            return Promise.reject("Value '" + newLetter + "' is not a letter!");
        }
        return new Promise((resolve, reject) => {
            let szNewValue = lastValue + newLetter;
            setTimeout(() => resolve(szNewValue), 250);
        });
    }

    // szStart = "ABC ";
    // addLetter2(szStart, "1")
    //     .then(value => addLetter2(value, "2"))
    //     .then(value => addLetter2(value, "ERROR!"))
    //     .then(value => addLetter2(value, "3"))
    //     .then(value => console.info(value))
    //     .catch(error => console.warn(error));

})();