// Аннотация или указание типа

// примитивные типы данных
// let revenue: number = 1000;
// let bonus: number = 500;
// let c = 'sdd';
// let d: boolean = true;

// let res: number = revenue + bonus;
// console.log(res);

// типы в функциях
// function getFullName(firstname: string, surname: string): string {
//   return `${firstname} ${surname}`;
// }

// const getFullNameArrow = (firstname: string, surname: string): string  => {
//   return `${firstname} ${surname}`;
// };

//так в TS не делают практически никогда
// function getFullName(firstname, surname) {
//   if (typeof firstname !== 'string') {
//     throw new Error('!!!!!!')
//   }
//   return `${firstname} ${surname}`;
// }

//console.log(getFullName('Andrey', 'Solo'));

//Объекты

// function getFullName(userEntity: {firstname: string, surname: string}): string {
//   return `${userEntity.firstname} ${userEntity.surname}`;
// }

// const user = {
//   firstname: 'Andrey',
//   surname: 'Solo',
//   city: 'Moscow',
//   age: 48,
//   skills: {
//     dev: true,
//     devops: true
//   }
// };

// console.log(getFullName(user));

//Массивы

// const skills: string[] = ['Dev', 'DevOps', 'Testing'];

// for (const skill of skills) {
//   console.log(skill.toLocaleLowerCase());
// }

// const res = skills
//       .filter((s: string) => s !== 'DevOps')
//       .map(s => s + '! ')
//       .reduce((a, b) => a + b);
// console.log(res);

// Tuples Кортежи
//const skill: [number, string] = [1, 'Dev'];
// const id = skill[0];
// const skillName = skill[1];
// //const q = skill[2]; error
// skill.push('dfddf');

// const [id, skillName] = skill;

// const arr: [number, string, ...boolean[]] = [1, 'ssss', true, false];

//Readonly
//const skill: readonly [number, string] = [1, 'Dev'];

//skill[1] = 3;

//const skills: readonly string[] = ['Dev', 'DevOps'];
//const skills: ReadonlyArray<string> = ['Dev', 'DevOps'];
//skills[1] = 'dsd';
//skills.push('sdds'); error

//Enums

// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS = 2,
//   FAILED = 3
// }

// const res = {
//   message: 'Платеж успешен',
//   statusCode: StatusCode.SUCCESS
// };

//статусы
// 1 - успех
// 2 - в процессе
// 3 - отклонен
// if (res.statusCode === StatusCode.SUCCESS) {

// }

// const enum Roles {
//   ADMIN = 1,
//   USER = 2
// };

// const res2 = Roles.ADMIN;

// Union

// function logId(id: string | number | boolean ) {
//   console.log(id);
// }

// logId(1);
// logId('sfgef');
// logId(true);

//Narrowing сужение типов

// function logId(id: string | number | boolean) {
//   if (typeof id === 'string') {
//     console.log(id);
//   } else if (typeof id === 'number') {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }

// function logError(err: string | string[]) {
//   if (Array.isArray(err)) {
//     console.log(err);
//   } else {
//     console.log(err);
//   }
// }
// function logObject(obj: { a: number } | { b: number }) {
//   if ('a' in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }

// function logMultipleIds(a: string | number, b: string | boolean) {
//   if (a === b) {
//     a.toLowerCase();
//   } else {
//     console.
// }

//Literal Types

// function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
//   return 1;
// }

//fetchWithAuth('sfd', 'get');
//fetchWithAuth('sfd', 'l'); error

// let method = 'post';

//fetchWithAuth('lkll', method as 'post'); error
// fetchWithAuth('lkll', method as 'post');

//Type Aliases
// type httpMethod = 'post' | 'get';

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//   return 1;
// }

// type User = {
//   name: string;
//   age: number;
//   skills: string[];
// };

// let user: User = {
//   name: 'ssdg',
//   age: 33,
//   skills: ['1', '2'],
// };

//Intersection Types

// type Role = {
//   id: number;
// };

// type UserWithRole = User & Role;

// let user: UserWithRole = {
//   name: 'ssdg',
//   age: 33,
//   skills: ['1', '2'],
//   id: 222
// };

//Interfaces

// interface User {
//   name: string;
//   age: number;
//   skills: string[];

//   log: (id: number) => string;
// }

// interface Role {
//   roleId: number;
// }

// interface UserWithRole extends User, Role {
//   createdAt: Date;
// }

// type User2 = {
//   name: string;
//   age: number;
//   skills: string[];

//   log: (id: number) => string;
// };

// let user: UserWithRole = {
//   name: 'ssdg',
//   age: 33,
//   skills: ['1', '2'],
//   roleId: 321,
//   createdAt: new Date(),

//   log(id) {
//     return '';
//   },
// };

// interface UserDic {
//   [index: number]: User;
// }

// type UserDic2 = {
//   [index: number]: User;
// };

// type ud = Record<number, User>;

//Types или Interfaces?

//merge interface

// interface User {
//   name: string
// }

// interface User {
//   age: number,
//   job: string
//   city: string
// }

// const user: User = {
//   name: 'Ann',
//   age: 22,
//   job: 'DevOps',
//   city: 'Omsk'
// }

// ------- Classes in TS -------------
//----------------------

// class User {
//   name: string;
//   age: number;

// Overloads
//   constructor();
//   constructor(name: string);
//   constructor(age: number);
//   constructor(name: string, age: number);
//   constructor(ageOrName?: string | number, age?: number) {
//     if (typeof ageOrName === 'string') {
//       this.name = ageOrName;
//     } else if (typeof ageOrName === 'number') {
//       this.age = ageOrName;
//     }
//     if (typeof age === 'number') {
//       this.age = age;
//     }
//   }
// }

// const user = new User('Вася');
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User('Вася', 33);

// class Admin {
//   role: number;
// }

// const admin = new Admin();
// admin.role  = 1;

// Methods
// enum  PaymentStatus {
//   Holded,
//   Processed,
//   Reversed
// }

// class Payment {
//   id: number;
//   status: PaymentStatus = PaymentStatus.Holded;
//   createdAt: Date = new Date();
//   updateAt: Date;

//   constructor(id: number) {
//     this.id = id;
//   }

//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   }

//   unholdPayment(): void {
//     if (this.status == PaymentStatus.Processed) {
//       throw new Error('Платеж не может быть возвращен!')
//     }
//     this.status = PaymentStatus.Reversed;
//     this.updateAt = new Date();
//   }
// }

// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);

// class User {
//   skills: string[];

//   addSkill(skill: string): void;
//   addSkill(skills: string[]): void;
//   addSkill(skillOrSkills: string | string[]): void {
//     if (typeof skillOrSkills == 'string') {
//       this.skills.push(skillOrSkills);
//     } else {
//       this.skills.concat(skillOrSkills);
//     }
//   }

// }

// new User().addSkill()
// Overloads function

// function run(distance: string): string;
// function run(distance: number): number;
// function run(distance: number | string): number | string {
//   if (typeof distance == 'number') {
//     return distance;
//   }
//   return distance;
// }
// run(1);

// -- getter & setter --

// class User {
//   _login: string;
//   password: string;

//   set login(l: string) {
//     this._login = 'user-' + l;
//   }

//   get login() {
//     return 'no_login';
//   }
// }

// const user = new User();
// //bad case
// // user.login = 'user-';
// user.login = 'myLogin';
// console.log(user);
// console.log(user.login);

// -- Implements --
// interface ILogger {
//   log(...args: number[]): void;
//   error(...args: number[]): void;
// }

// class Logger implements ILogger {
//   log(...args: any[]): void {
//     console.log(...args);
//   }
//   async error(...args: any[]): Promise<void> {
//     // Кинуть во внешнюю систему
//     console.log(...args);
//   }
// }

// interface IPayable {
//   pay(paymentId: number): void;
//   price?: number;
// }

// interface IDeleteable {
//   delete(): void;
// }

// class User implements IPayable, IDeleteable {
//   delete(): void {
//     throw new Error("Method not implemented.");
//   }
//   pay(paymentId: number | string): void {
//     ///
//   }
//   price?: number | undefined;
// }

// -- Extends --
// type PaymentStatus = 'new' | 'paid';

// class Payment {
//   id: number;
//   status: PaymentStatus = 'new';

//   constructor(id: number) {
//     this.id = id;
//   }

//   pay() {
//     this.status = 'paid';
//   }
// }

// class PersistedPayment extends Payment {
//   databaseId: number;
//   paidAt: Date;

//   constructor() {
//     const id = Math.random();
//     super(id);
//   }

//   save() {
//     // Сохраняет в базу
//   }
//   // Overriding Method
//   override pay(date?: Date ) {
//     super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }

// new PersistedPayment();

// -- Typescript - Generics, Index Access Types, Keyof на простом примере --

const menu = {
  analytycs: {
    bussines: "Для бизнеса",
    data: "Big Data",
  },
  design: {
    graphical: "Графический",
  },
};

function getMenu<T, L1 extends keyof T, L2 extends keyof T[L1]>(
  obj: T,
  l1: L1,
  l2: L2
): T[L1][L2] {
  return obj[l1][l2];
}

const res = getMenu(menu, 'design', 'graphical');

//   pay() {
//     this.status = 'paid';
//   }
// }

// class PersistedPayment extends Payment {
//   databaseId: number;
//   paidAt: Date;

//   constructor() {
//     const id = Math.random();
//     super(id);
//   }

//   save() {
//     // Сохраняет в базу
//   }
//   // Overriding Method
//   override pay(date?: Date ) {
//     super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }

// new PersistedPayment();

// class User {
//   name: string = 'user';

//   constructor() {
//     console.log(this.name);
//   }
// }

// class Admin extends User {
//   name: string = 'admin';

//   constructor() {
//     super();
//     console.log(this.name);
//   }
// }

// new Admin();

// new Error('');

// class HttpError extends Error {
//   code: number;

//   constructor(message: string, code?: number) {
//     super(message);
//     this.code = code ?? 500;

//   }
// }

// -- Композиция против наследования --

// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// // Наследование
// // bad case
// class Users extends Array<User> {
//   searchByName(name: string) {
//     return this.filter(u => u.name === name);
//   }

//   override toString(): string {
//     return this.map(u => u.name).join(', ');
//   }
// }

// const users =  new Users();
// users.push(new User('Вася'));
// users.push(new User('Петя'));
// console.log(users.toString());

// // Композиция
// // good!
// class UsersList {
//   users: User[];

//   push(u: User) {
//     this.users.push(u);
//   }
// }

// class Payment {
//   date: Date;
// }

// // Наследование
// class UserWithPayment extends Payment {
//   name: string;
// }

// // Композиция
// class UserWithPayment2 {
//   user: User;
//   payment: Payment;

//   constructor(user: User, payment: Payment) {
//     this.payment = payment;
//     this.user = user;
//   }
// }

// -- 46. Видимость свойств --

class Vehicle {
  public make: string;
  private damages: string[];
  private _model: string;
  #price: number;

  // доступно у наследников
  protected run: number;

  set model(m: string) {
    this._model = m;
    this.#price = 199;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    this.#price === v.#price;
  }

  private addDamage(damage: string) {
    this.damages.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setRun(km: number) {
    this.run = km / 0.62;
    //this.damages - error
  }
}

new Vehicle();
