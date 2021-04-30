

   function helloWorld() {
    };

    function

    function helloWorld()
    {
        return "Hello, World!";
    }

    console.log(helloWorld())

    function notHelloWorld() {
        return "Let's hope this works";
    }

    function sayHello(x) {
        if (x === "Alex") {
            return "Hello, Alex!"
        } else if (x === "Pat") {
            return "Hello, Pat!";
        } else if (x === "World") {
            return "Hello, World!";
        } else {
            return "Hello, Jane!"
        }
    };console.log(sayHello("World"))

    function isFive(x) {
        return x === 5;
    }


    function isVowel(char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            return true;
        }
        return false;
    }

    console.log(isVowel('Y'))


   function isEven(num) {
       if(num % 2 == 0) {
           return true
       }else
           return false
   }
       console.log(isEven("8"))


   function add(a,b){
    var a = parseInt(a)
       var b = parseInt(b)
        return a + b
}console.log(add('-1','split'))