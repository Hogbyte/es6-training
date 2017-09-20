/*
 * The "let" keyword is used to declare variables.
 * - It is NOT hoisted like var
 * - It is scoped it its block
 */
(function() {

    // Var example
    function testVar() {
        for (var iCounter = 0; iCounter < 3; iCounter++) {
            // Some processing
        }
        console.log("testVar: iCounter = " + iCounter); // No problem
    }

    // let example
    function testLet() {
        for (let iCounter = 0; iCounter < 3; iCounter++) {
            // Some processing
        }
        console.log("testLet: iCounter = " + iCounter); // ERROR!
    }

    testVar();
    //testLet();

})();