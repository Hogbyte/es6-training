(function() {

    /* ES5 function definition */

    function noDefaults(message, param1, param2, param3) {
        console.log(
            "noDefaults called: " + message +
            "\nparam1: " + param1 +
            "\nparam2: " + param2 +
            "\nparam3: " + param3);
    }

    noDefaults("All parameter values provided.", 1, 2, 3);
    noDefaults("No parameter values provided.");
    noDefaults("First parameter provided.", "ABC");

    /* ES6 function definition with default values provided for last three parameters */

    function withDefaults(message, param1 = 1, param2 = "two", param3 = [3]) {
        console.info(
            "withDefaults called: " + message +
            "\nparam1: " + param1 +
            "\nparam2: " + param2 +
            "\nparam3: " + param3);
    }

    // withDefaults("All parameter values provided.", 1, 2, 3);
    // withDefaults("No parameter values provided.");
    // withDefaults("First parameter provided.", "ABC");

    // withDefaults("null passed to all parameters.", null, null, null);   /* null is used, not defaults */
    // withDefaults("undefined passed to all parameters.", undefined, undefined, undefined); /* defaults used */

})();