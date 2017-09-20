(function() {

    // Test each console function
    console.log("Test Log");
    console.info("Test Info");
    console.warn("Test Warning");
    console.error("Test Error");

    // Test delayed info message
    setTimeout(function() {
        console.info("Info message after 1 second delay.");
    }, 1000);

    // Test global errors (variable c does not exist)
    var a = "a", b = "b";
    console.warn("A", a, "B", b, "C", c);

})();