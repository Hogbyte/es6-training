/*
 * The "..." operator can be used in other contexts to expand an array 
 */

 (function() {

    /* A better way to concatenate arrays */
    const LETTERS = ["A", "B", "C"];
    const NUMBERS = [1, 2, 3];
    console.log("Array concatination using 'concat':", LETTERS.concat(NUMBERS));
    //console.info("Array concatination using spread:",   [...LETTERS, ...NUMBERS]);

    /* If data exists in an array: easier way to pass data to a function
    (note: January = 0) */
    const DATE_PARTS = [2017, 0, 4, 12, 59, 30];
    let dtHard = new Date(DATE_PARTS[0], DATE_PARTS[1], DATE_PARTS[2], DATE_PARTS[3], DATE_PARTS[4], DATE_PARTS[5]);
    let dtEasy = new Date(...DATE_PARTS);
    let dtError = new Date(DATE_PARTS); // Date constructor does not take an array
    console.log("Date created the hard way: " + dtHard.toLocaleString());
    //console.info("Date created the easy way: " + dtEasy.toLocaleString());
    //console.warn("Error Date: " + dtError);

})();