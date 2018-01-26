console.log("Welcome!");


//a function that updates the DOM
function change(){
    //function body:
    document.getElementById("foo").innerText = greets[3];
    
}



var name = "Lucille";
var numberOfWidgets = 100;
var isCodingHard =true;

var characters = [50, true, "Lucille", "Michael Bluth", "Tobias", 10 , 2];

console.log(characters[0]);

var greets = ["Hello!", "Howdy", "Howdy Y'all!", "Greetings", "Hi.", "Yo!"];

console.log(greets[5])

var meat = ["pork", "beef", "chicken", "duck" ];
var fruit = ["tomatoes", "squash", "pineapple"];
var food = [meat, fruit];

console.log(food[1][2]);

var user = {
    'firstName': "Lucille",
    age: 40,
    "lastName": "Bluth",
    hasHair: true,
    "has-feet": true
};


var num = 3.5;
var num2 = 5.6;
var sum = num + num2;

function add(){
    //function body:
    document.getElementById("foo").innerHTML = sum;
    
}

var string1 = "Hello ";
var string2 = "JavaScript!"
var comboString = string1+string2

function combineStr(){
    document.getElementById("foo").innerHTML = comboString;
}

var me ={
    firstName: "Dan",
    lastName: "Mulivhill",
    fingerCount: 10,
    interests: ["computer stuff", "CSS" , "JS", "sleeping"]
}

console.log(me.interests[0]);