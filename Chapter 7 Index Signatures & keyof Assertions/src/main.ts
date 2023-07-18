// Index Signatures

//interface TransactionObj {
//  Pizza: number,
//  Books: number,
//  Job: number
//}

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
}

console.log(todaysNet(todaysTransactions));

//todaysTransactions.Pizza = 25;

//console.log(todaysTransactions["Niklas"]);

//////////////////////////////////////////////////////////////////

interface Student {
  //[key: string]: number | string | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: 'Niklas',
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).forEach(key => {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`${key}: ${student[key]}`);
}

logStudentKey(student, 'name');


//////////////////////////////////////////////////////////////////

//interface Incomes {
//  [key: string]: number
//
//}

type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number | string>

const monthlyIncome: Incomes = {
  salary: 5000,
  bonus: 1000,
  sidehustle: 200
}

for (const key in monthlyIncome) {
  console.log(`${key}: ${monthlyIncome[key as keyof Incomes]}`);
}
