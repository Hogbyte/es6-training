(function() {

    // Set-up:
    var oExample = { make: "Ford", model: "Mustang", year: 1976 };
    var aszExample = [ "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet" ];

    // ES5: Values from object
    var szEs5Make = oExample.make,
        szEs5Model = oExample.model,
        iEs5Year = oExample.year;
    console.log("ES5 Object Values.\nMake: " + szEs5Make + "\nModel: " + szEs5Model + "\nYear: " + iEs5Year);

    // ES5: Values from array
    var szEs5FirstColor = aszExample[0],
        szEs5SecondColor = aszExample[1],
        szEs5FifthColor = aszExample[4];
    console.log("ES5 Array Values.\nFirst: " + szEs5FirstColor + "\nSecond: " + szEs5SecondColor + "\nFifth: " + szEs5FifthColor);

    // ES6: Values from object
    // let { make: szEs6Make, model: szEs6Model, year: iEs6Year } = oExample;
    // console.info(`ES6 Object Values.\nMake: ${szEs6Make}\nModel: ${szEs6Model}\nYear: ${iEs6Year}`);
    // // -or-
    // let { make, model, year } = oExample;
    // console.info(`ES6 Object Values (variable name equals property name).\nMake: ${make}\nModel: ${model}\nYear: ${year}`);

    // ES6: Values from array
    // let [ szEs6FirstColor, szEs6SecondColor, , , szEs6FifthColor] = aszExample; // Note skipped array indexes
    // console.info(`ES6 Array Values.\nFirst: ${szEs6FirstColor}\nSecond: ${szEs6SecondColor}\nFifth: ${szEs6FifthColor}`);

    // Useful example?: Swapping without a temparary variable
    // let iValue1 = 10, iValue2 = 20;
    // [ iValue1, iValue2 ] = [ iValue2, iValue1 ];
    // console.info(`ES6 Swapping Via Destructuring: Value 1: ${iValue1}, Value 2: ${iValue2}`);

    // Providing defaults
    // let [ , , szEs6ThirdColor = "Pink", , , , , szPastArrayBounds = "Black" ] = aszExample;
    // console.info(`ES6 Destructuring Default Values. Third: ${szEs6ThirdColor}, Past Array Bounds: ${szPastArrayBounds}`);
})();