(function() {
    // Set-up:
    var make = "Ford",
        model = "Mustang",
        year = 1976;

    // ES5 Syntax (name: value)
    var oCarInfo = { 
        make: make,
        model: model,
        year: year
    }; 
    console.log("ES5 Car Info:", oCarInfo);

    // ES6 Syntax (when variable name is same as property name)
    // oCarInfo = { make, model, year };
    // console.info("ES6 Car Info:", oCarInfo);

    // ES6 Syntax: Can mix-and-match
    // var carColor = "blue";
    // oCarInfo = { make, model, year, color: carColor, miles: 53600 };
    // console.info("ES6 Car Info (extended):", oCarInfo);

})();