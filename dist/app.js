"use strict";
let user = {
    username: "anwar",
    id: 100,
    skills: {
        one: 'javascript',
        two: 'c++'
    },
    State: true
};
console.log(user.skills);
let user2 = {
    username: 'tarek',
    id: 200,
    skills: {
        one: 'javascript',
        two: 'c++'
    }
};
console.log(user2.skills.one);
console.log(user.username);
let details = {
    country: 'Egypt',
    job: 'software engineer',
    age: 21
};
console.log(details.job);
function data(mydata) {
    return `mydata: mycountry : ${mydata.country} my age:${mydata.age} my job:${mydata.job}`;
}
console.log(data({ country: 'Egypt', age: 21, job: 'software engineer' }));
let mymethods = {
    username: 'anwar',
    getage() { return 21; },
    getdetails: () => { return `${mymethods.username}`; },
    Doublenumber(number) { return number * 2; }
};
console.log(mymethods.Doublenumber(10));
console.log(mymethods.getage());
console.log(mymethods.getdetails());
class Parent {
    constructor(username, salary, country, age) {
        this.u = username;
        this.s = salary;
        this.c = country;
        this.a = age;
    }
}
let obj1 = new Parent("anwar", 5000, 'Egypt', 21);
console.log(obj1.s);
class Parent2 {
    constructor(username, _salary, country, age) {
        this.username = username;
        this._salary = _salary;
        this.country = country;
        this.age = age;
    }
    get mysalary() {
        return this._salary;
    }
    set newsalary(value) {
        this._salary = value;
    }
}
let obj2 = new Parent2("tarek", 10000, 'Egypt', 21);
console.log(obj2.mysalary);
obj2.newsalary = 15000;
console.log(obj2.mysalary);
class prperty {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        prperty.counter++;
    }
    static getobjectnumber() {
        return `number created objects ${this.counter}`;
    }
}
prperty.counter = 0;
let obj3 = new prperty('anwar', 21);
let obj4 = new prperty('anwar', 21);
let obj5 = new prperty('anwar', 21);
let obj6 = new prperty('anwar', 21);
console.log(prperty.getobjectnumber());
