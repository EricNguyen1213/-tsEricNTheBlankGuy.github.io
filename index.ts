console.log("hello world");

let meaningOfLife: number = 51
console.log(meaningOfLife)

let choices: boolean = false
if(meaningOfLife < 50){
    console.log("meaningOfLife is less than 50")
}else{
    console.log("meaningOfLife is greater than 50")
}

function sum(nun1: number, nun2: number): number{
    //console.log("Full House is a meh show")
    return nun1+nun2
}
console.log(sum(2.9,100))

function logIf(shouldI: boolean, message: string) {
    if (shouldI) {
        console.log(message)
    }
}

logIf(true, "Your momma")

interface HotPot {
    isItSpicy: boolean;
    spicyRating: number;
    spicyName: string;
}

let myHotPot: HotPot;
myHotPot={
    isItSpicy: true;
    spicyRating: 9;
    spicyName: "Adam is spicy"
}

console.log(myHotPot.spicyName);

class Animal {
    name: string;
    heartRate: number;

    constructor(name: string, heartRate: number) {
        this name = name;
        this heartRate= heartRate;
    }

    introduction() {
        console.log(this.name);
    }
}

let panda: Animal;
panda = new Animal("Giggles", 120)
console.log(panda.name)

panda.introduction();

let giraffe: Animal;
giraffe = new Animal("Peter", 45);
giraffe.introduction();