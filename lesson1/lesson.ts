export {}

let n: null = null;
let u: undefined = undefined;

let arr: number[] = [1,2,3];
let arr2: Array<number> = [1, 2, 3];

let person: [string, number] = ['Sergey', 23 ];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let nikogdaProtoTakNeIspolzui: any = true;
let nikogdaProtoTakNeIspolzui2 = 10;

let name: string = 'Sergey';

function greetMe(name: string){
    return `Hello, ${name}`
} 

let a;
a = 10;
a = true;

let b:boolean = true;
b = false;

let andType: number | string = 3.1415;
andType = 20;
andType = '20';
if((typeof andType) === 'string') {
    andType = parseFloat(andType);
};

function add(a: number, b: number = 10): number {
    if(b) return a+b
    else return a;
};

console.log(add(2,3));
console.log(add(2));

interface iPerson {
    firstname: string;
    lastname?: string;
}

function fullName(p: iPerson){
    console.log(`${p.firstname} ${p.lastname}`);
}

let p = {
    firstname: 'Sergey'
}
fullName(p);

class cUser {
    userName: string;
    private userLastname: string;

    constructor(name: string, lastname: string) {
        this.userName = name;
        this.userLastname = lastname;
    }

    private greet(name: string) {
        console.log(`Hey, ${name}`);
    }
    greetAll = (...names: string[]) => {
        names.forEach(el => this.greet(el))
    }
}

class cAdmin extends cUser {
    age: number;
    constructor(adminName: string, adminLastname: string, age: number) {
        super(adminName, adminLastname);
        this.age = age;
    }
    sayMyau = () => `Myau`;
}

let currentUser = new cAdmin(`Sergey`,`Shlykov`, 23);

currentUser.greetAll();
console.log(currentUser.sayMyau());
//console.log(currentUser.userLastname);


let value = 173;    
    
const fCountOddNums = (value: number): void =>{
    let num: number = 0;
    for (let i = 0; i < value; i++){
      if (i%2 == 0)
      {
        continue;
        /* continue/break */
      }
      num++;
    }
    console.log(num); 
}

fCountOddNums(value);