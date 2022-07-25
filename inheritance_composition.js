function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canEat = {    
    Eat: function(){
    console.log("eating")
    }
}
var canWalk = {
    Walk: function(){
    console.log("walking")
    }
}

var canSwim = {
    Swim: function() {
    console.log("swimming")
    }
}

var canSleep = {
    Sleep: function(){
    console.log("ghumai naa")
    }
}

// Inheritance:
var person = Object.assign({}, canEat, canWalk, canSwim)
person.name = "Delower"
console.log(person)

// Composition:

function Person(name){
    this.name = name
}

// Object.assign(Person.prototype, canEat, canSwim, canWalk)
// var p1 = new Person("Delower")
// p1.Eat()
// console.log(p1)

mixin(Person.prototype, canEat, canWalk)

var person = new Person("Delower")
person.Walk()
person.Eat()

