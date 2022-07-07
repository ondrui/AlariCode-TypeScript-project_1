
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
let o: Object;
