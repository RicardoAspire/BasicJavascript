export default class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

export function printName(user){
    console.log("The name is "+this.name);
}
export function printAge(user){
    console.log("The age is: "+this.age);
}