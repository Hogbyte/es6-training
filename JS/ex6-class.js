/* LESSON 1 - Using functions to emulate "Class" behavior */

(function() {

    function ProtoPerson(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    ProtoPerson.prototype.greet = function() {
        return "Hello, my name is " + this.firstName + " " + this.lastName + ".";
    }

    let oProtoPerson = new ProtoPerson("Tom", "Smith");
    console.log(
        "Proto-Person:", oProtoPerson,
        "Proto-Person says:", oProtoPerson.greet());

    /* LESSON 2 - Using the "class" keyword */

    // class ClassyPerson {
    //     constructor(first, last) {
    //         this.firstName = first;
    //         this.lastName = last;
    //     }

    //     greet() {
    //         return "Hello, my name is " + this.firstName + " " + this.lastName + ".";
    //     }
    // }

    // let oClassyPerson = new ClassyPerson("William", "Jones");
    // console.info(
    //     "Classy Person:", oClassyPerson,
    //     "Classy Person says:", oClassyPerson.greet());

})();

/*
 * IMPORTANT NOTES:
 * - "class" is just syntatical sugar
 * - under-the-hood behavior is the same as if written using function and prototype
 */