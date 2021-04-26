// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function notHelloWorld(){
    return "Let's hope this works";
}

function sayHello(x) {
    if (x === "Alex") {
        return "Hello, Alex!"
    } else if (x === "Pat") {
        return  "Hello, Pat!";
             }
     else if (x === "World") {
        return "Hello, World!";
    }else{
                  return "Hello, Jane!"
    }
};console.log(sayHello("World"))