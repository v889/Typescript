//Basic type
let num:number=5
let company:string="Traversy Media"
let isPublished:boolean=true
let x:any="Hello"
x=true
let ids:number[]=[1,2,3,4,5]
ids.push(6) //Array method to add new element at the end of array
//ids.push("Hello");
let person:[number,string,boolean]=[1,"temp",true]
let employee:[number,string][]
employee=[
    [101,'John'], [102,'Jane']]
//union
let pid:string|number
pid='22'

//enum
enum Direction1{
    Up=2,
    Down,
    Left,
    Right
}
console.log('Direction',Direction1.Up)

//objects
type User={
    id:number,
    name:string
}
const user:User={
    id:1,
    name:'John',
    

}

//type assertion
let cid:any=1
let customised=<number> cid
let CustomerID=cid as number
function addNum(x:number,y:number):number{
    return x+y;
}

console.log("Addition",addNum(1,2));
function log(message:string|number):void{
    console.log(`Message:${message}`);
    
}

log("hello")
log(123)


//interface-Custom type
interface UserInterface{
    id:number
    name:string
    age?:number // ? optional field
}
const user1:UserInterface={
    id:1,
    name:"John"
    
}
console.log("Name:",user1.name)
interface MathFunc{
    (a:number,b:number):number
}
const add:MathFunc=(x:number,y:number):number=>x+y;
const sub:MathFunc=(x:number,y:number):number=>x-y;
console.log(add(7,9))

//classes
class Person{
    pid:number
    name:string
    constructor(pid:number,name:string){
        this.name=name
        this.pid=pid
        console.log("Constructor called")

    }
    register(){
        return `${this.name} is registered`
    }
}
const temp=new Person(12,"Vishal")
console.log(temp)
temp.pid=9
console.log(temp)
console.log(temp.register());

//class with interface
interface StudentInterface{
    Rollno:number,
    name:string
    Register():string
}
class Student implements StudentInterface{
    Rollno:number
    name: string
    
    Register(): string {
        return "Hello"
    }
    constructor(pid:number,name:string){
        this.name=name
        this.Rollno=pid
        console.log("Constructor called")

    }

}

//inhertit the subclass
/*
class Employeee extends Person{
    salary: number
    department: string
   
}
*/
//generics
/*function getArray(items:any[]):any[]{
    return new Array().concat(items)
}
let numArray=getArray([1,2,3,4])
let strArray=getArray(['kkk','jjj'])
numArray.push("hello")*/
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray=getArray<number>([12,2,4,5])
console.log(numArray)



