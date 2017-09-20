/*
 * The "const" keyword is used to create a constant variable
 * - It is block scoped, similar to "let"
 * - It is a constant reference, you can modify the object assigned to the variable but cannot assign a new object
 */

(function() {

    // The value assigned to a constant cannot be changed
    function testAssignment() {
        const NUMBER = 1;
        console.log("testAssignment: NUMBER = " + NUMBER);
        NUMBER = 2; // ERROR!
    }

    // The value that the constant points to can be modified (array or object)
    function testUpdate() {
        const ARRAY = [1, 2, 3];
        console.log("testUpdate: ARRAY (original) =", ARRAY);
        ARRAY.push(4);
        console.log("testUpdate: ARRAY (after push) =", ARRAY);
    }

    testAssignment();
    //testUpdate();

})();