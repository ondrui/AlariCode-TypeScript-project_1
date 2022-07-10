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
//     console.log(a);
//   }
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

interface User {
  name: string
}

interface User {
  age: number,
  job: string
}

const user: User = {
  name: 'Ann',
  age: 22,
  job: 'Backend Dev'
}
