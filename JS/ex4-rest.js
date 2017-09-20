/*
 * Use "..." before the final parameter in a function, this will give you the remaining parameters as an array
 */

 (function() {

    function testRestEs5(param1, param2, ...everythingElse) {
        console.log(
            "testRest called, all arguments: " + JSON.stringify(arguments) +
            "\nparam1: " + param1 +
            "\nparam2: " + param2 +
            "\neverythingElse: " + everythingElse);
    }

    testRestEs5("A", "B", "C", "D", "E");

    function testRestEs6(...input) {
        console.info("My input was: " + JSON.stringify(input));
    }

    // testRestEs6();
    // testRestEs6("A", "B", "C", "D", "E");     // Each item ends up in the "input" array
    // testRestEs6(["A", "B", "C", "D", "E"]);   // A single array is placed *inside* of the "input" array

})();