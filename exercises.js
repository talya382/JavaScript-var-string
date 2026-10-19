//hello js
console.log("Hello,js!")
console.log("talya")
console.log("ashkelon")
console.log("2026")
const city="Ashkolon"
console.log(`my city: ${city}`)
let score=0
console.log("score: ${score}")
score=10
console.log("score: ${score}");
console.log(`score`+score);

//קונסט משתנה שהוא קבוע ולא ניתן לשנות אותו ex-7
// const pi=3.14
// pi=3

let color='blue'
color='red'


// let a=1 
// let a=2


var b=1
var b=2

//undefind
let total=5
console.log(total);

const date="29.03.26"
let point=0
let lastName="cohen"
let counter=0

// userName-v, 2fast-x, my var-x, _count-x, $price-v, let-x, first-name-v, totalPrice-v, Total-v, class-x.
//2fast->fast2, my var->myVar, _count-> count_, let-lett,class->cls

let age=20
let Age=30
console.log(age ,Age);

let proudPrice
let isConect=true
let numOfkid=10

const str="str"
let num=1
let bool=true

const name="talya"
const name1=`talya`
const name2='talya'

let n="\'"
console.log(n);
let m="'"
console.log(m);
let num1=2.2
let num2=2
console.log(typeof(num1),typeof(num2));
//%מחשב שארית
console.log(3%10,4/10,5*10,5-10,5+10);

const isStudent=true
const isVegan=false
console.log(isStudent,isVegan);
//bool
console.log(5===5,3>5,3<5)

const str5=""
const str6=' '
console.log(str5===str6);


let u

const middleName = null
//nall זה ערך שמגדירים למשתנה 
//undefined זה ערך דיפפולטיבי של משתנה ריק למשתנה
console.log(middleName);

console.log(null == undefined)
console.log(null === undefined)

//ex28 string="mm" number="1" bool=true null=0 undefined

console.log(typeof('hello'),typeof(true),typeof(undefined),typeof(null),typeof(42));
//30 object כן מכייון שNULL  הוא מסוג object
console.log(typeof(NaN));
//31 number
console.log(typeof(42));

let n2=null
let t=true
let num8=3
let pm="oo"
let ll=undefined
console.log(typeof(n2),typeof(t),typeof(num8),typeof(pm),typeof(ll));

let value="5"
console.log(typeof(value));

const name_of="yael"
const age_of=4
console.log(`My name is ${name}, and I am ${age}`)

console.log('My name is + name+ and I am +age+')


console.log(`the sum of 3 and 4 is ${3+4}`);

const quantity = 3
const price = 80
console.log(`total: ${quantity*price}`)
console.log('jdjnajkenlfvlke.kfek\n v,v,v')
console.log(`Vegan: ${isVegan}, kids: ${numOfkid}`)
let num9=42
console.log(`num:${num9}`,typeof(num9));

let s=123
console.log(`string:${s}`,typeof(s));
console.log(Number('12px'))
//NAN
console.log(Number(true), Number(false), Number(null), Number(undefined),Number(""));
//1 0 0 NaN 0

console.log(String(true), String(null), String(undefined));
//rue null undefined

// const input = '25'
// input=input+5
// console.log(Number(input))
//+ הוא אופרטור שיכול לשרשר מחרוזות בנוסף לפעולת חיבור

console.log('5' + 1, '5' - 1, '5' * 2, '10' / 2);

//שאלות 48-57

//55

//3

//5true

//2

//string

//object undefined

//undefined

//NaN number

//falsh

//TypeEROR


let my_age=3
let my_city="netivot"
let isStudevt=true
let iscoffe=false

console.log(`age:${my_age} ${typeof(my_age)}\n city:${city} ${typeof(city)}\n isstudent:${isStudent} ${typeof(isStudent)}\n iscoffe:${iscoffe} ${typeof{iscoffe}}`);

const p1Name = "חולצה";
const p1Price = 50;
const p1Qty = 2;

const p2Name = "מכנסיים";
const p2Price = 120;
const p2Qty = 1;

const p3Name = "נעליים";
const p3Price = 200;
const p3Qty = 1;

const total1 = p1Price * p1Qty;
const total2 = p2Price * p2Qty;
const total3 = p3Price * p3Qty;
console.log(`\n=== חשבונית קניה ===\n1. חולצה | כמות: 2 | מחיר ליחידה: ₪50 | סכום: ₪100\n2. מכנסיים | כמות: 1 | מחיר ליחידה: ₪120 | סכום: ₪120\n3. נעליים | כמות: 1 | מחיר ליחידה: ₪200 | סכום: ₪200\n---------------------\nסכום כולל לתשלום: ₪420\n`);

const celsius = 25
console.log(`${25}°C = ${25 * 9 / 5 + 32}°F`)

const ageInput = '30';
const heightInput = '1.75';
console.log(`י המרלה פנ- ageInput: ${ageInput} (${typeof ageInput}), heightInput: ${heightInput} (${typeof heightInput})`);
const age22 = Number(ageInput);
const height = Number(heightInput);
console.log(`אחרי המרה - age: ${age22} (${typeof age22}), height: ${height} (${typeof height})`);
const val1 = "שלום";
const val2 = 42;
const val3 = true;
const val4 = undefined;
const val5 = 10n;
const val6 = "עולם";
const val7 = 3.14;
const val8 = false;
const val9 = Symbol('id');
const val10 = null;
console.log(`Value: ${val1}, Type: ${typeof val1}`);
console.log(`Value: ${val2}, Type: ${typeof val2}`);
console.log(`Value: ${val3}, Type: ${typeof val3}`);
console.log(`Value: ${val4}, Type: ${typeof val4}`);
console.log(`Value: ${val5}, Type: ${typeof val5}`);
console.log(`Value: ${val6}, Type: ${typeof val6}`);
console.log(`Value: ${val7}, Type: ${typeof val7}`);
console.log(`Value: ${val8}, Type: ${typeof val8}`);
console.log(`Value: ${String(val9)}, Type: ${typeof val9}`);
console.log(`Value: ${val10}, Type: ${typeof val10}`);