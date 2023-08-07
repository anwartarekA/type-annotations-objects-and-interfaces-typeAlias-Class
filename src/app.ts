let user: {
    readonly username: string,
    id: number,
    skills: {
        one: string,
        two: string
    },
    State?: boolean
} = {
    username: "anwar",
    id: 100,
    skills: {
        one: 'javascript',
        two: 'c++'
    },
    State: true
}
console.log(user.skills);

// with type alias 

type User = {
    username: string,
    id: number,
    skills: {
        one: string,
        two: string
    }
}
let user2: User = {
    username: 'tarek',
    id: 200,
    skills: {
        one: 'javascript',
        two: 'c++'
    }
}
console.log(user2.skills.one);
console.log(user.username);

interface childone {
    country: string,
    job: string
}
interface childone {
    age: number
}
let details: childone = {
    country: 'Egypt',
    job: 'software engineer',
    age: 21
}
console.log(details.job);

function data(mydata: childone): string | number {
    return `mydata: mycountry : ${mydata.country} my age:${mydata.age} my job:${mydata.job}`
}
console.log(data({ country: 'Egypt', age: 21, job: 'software engineer' }));

interface methods {
    getage(): number,
    getdetails: () => string,
    Doublenumber(number: number): number,
    username: string
}
let mymethods: methods = {
    username: 'anwar',
    getage() { return 21 },
    getdetails: () => { return `${mymethods.username}` },
    Doublenumber(number) { return number * 2 }
}
console.log(mymethods.Doublenumber(10));
console.log(mymethods.getage());
console.log(mymethods.getdetails());

class Parent {
    u: string;
    s: number;
    c: string;
    a: number
    constructor(username: string, salary: number, country: string, age: number) {
        this.u = username;
        this.s = salary;
        this.c = country;
        this.a = age
    }
}

let obj1 = new Parent("anwar", 5000, 'Egypt', 21);
console.log(obj1.s);


class Parent2 {

    constructor(public username: string, private _salary: number, public readonly country: string, public age: number) {
    }
    get mysalary ():number{
        return this._salary
    }
    set newsalary (value:number)
    {
        this._salary = value;
    }
}
let obj2  = new Parent2("tarek",10000,'Egypt',21);
console.log(obj2.mysalary);
obj2.newsalary = 15000;
console.log(obj2.mysalary);

class prperty {
    static counter = 0;
    constructor (public name:string, public age:number){
        prperty.counter++;
    }
    static getobjectnumber ():string {
        return  `number created objects ${this.counter}`
    }
}

let obj3 = new prperty ('anwar',21);
let obj4 = new prperty ('anwar',21);
let obj5 = new prperty ('anwar',21);
let obj6 = new prperty ('anwar',21);

console.log(prperty.getobjectnumber());
