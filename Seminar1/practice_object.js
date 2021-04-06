const empty = {};

console.log("typeof empty:" + typeof empty);
console.log("empty:" + empty);
console.log(empty);

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    console.log(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + ".");
  },
};

console.log("typeof person:" + typeof person);
console.log("person:" + person);
console.log("person:" + JSON.stringify(person));
console.log(person);

// dot notation
console.log("[Dot Notation]");
console.log("person.name:" + person.name);
console.log("person.age:" + person.age);
console.log("person.gender:" + person.gender);
console.log("person.interests:" + person.interests);
person.bio();
person.greeting();

// bracket notation
console.log("[Bracket Notation]");
console.log("person[name]:" + person["name"]);
console.log("person[age]:" + person["age"]);
console.log("person[gender]:" + person["gender"]);
console.log("person[interests]:" + person["interests"]);
person["bio"]();
person["greeting"]();

// update object
console.log("[Update Object]");
person.name = "남궁권";
person.age = 27;
person.bark = function () {
  console.log("bark, bark!!");
};
console.log(person);
person.bark();

function add(a,b){
    return a+b;
}
//add:함수명
//a,b : 파라미터
//{} 안에 함수에 대한 로직.

//화살표함수
const add2 = (a,b) => a+b;

//비구조화 할당
let {name,age} = person;

let array=[1,2,3,4];
let [head,...rest] = array;//head=1, rest=[2,3,4];

let a = 1, b=2;
[a,b] = [b,a];