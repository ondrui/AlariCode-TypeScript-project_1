"use strict";
//------------1-------
// let info: {
//   officeId: number,
//   isOpened: boolean,
//   contacts: {
//     phone: string,
//     email: string,
//     address: {
//       city: string
//     }
//   }
// } = {
// 	"officeId": 45,
// 	"isOpened": false,
// 	"contacts": {
// 		"phone": "+79100000000",
// 		"email": "my@email.ru",
// 		"address": {
// 			"city": "Москва"
// 		}
// 	}
// }
//-------------2----
// enum StatusCode {
//   PUBLISHED = 'published',
//   DRAFT = 'draft',
//   DELETED = 'deleted',
// }
// async function getFaqs(req: { topicId: number; status: StatusCode }): Promise<
//   {
//     question: string;
//     answer: string;
//     tag: string[];
//     likes: number;
//     status?: StatusCode;
//   }[]
// > {
//   const res = await fetch('/faqs', {
//     method: 'POST',
//     body: JSON.stringify(req),
//   });
//   const data = await res.json();
//   return data;
// }
//-------------3----
// interface IPayment {
//   sum: number;
//   from: number;
//   to: number;
// }
// interface IPaymentRequest extends IPayment {}
// enum PaymentStatus {
//   Success = 'success',
//   Failed = 'failed',
// }
// interface IDataSuccess extends IPayment {
//   databaseId: number;
// }
// interface IDataFailed {
//   errorMessage: string;
//   errorCode: number;
// }
// //bad
// interface IResponse {
//   status: PaymentStatus;
//   data: IDataSuccess | IDataFailed;
// }
// //good
// interface IResponseSuccess {
//   status: PaymentStatus.Success;
//   data: IDataSuccess;
// }
// interface IResponseFailed {
//   status: PaymentStatus.Failed;
//   data: IDataFailed;
// }
// type Res = IResponseSuccess | IResponseFailed;
// -- 4 --
// function isSuccess(res: Res): res is IResponseSuccess {
//   if(res.status === PaymentStatus.Success) {
//     return true;
//   }
//   return false;
// }
// function geIdFromData(res: Res): number {
//   if (isSuccess(res)) {
//     return res.data.databaseId;
//   } else {
//     throw new Error(res.data.errorMessage);
//   }
// }
// function isSuccess(res: Res): res is IResponseSuccess {
//   if(res.status === PaymentStatus.Success) {
//     return true;
//   }
//   return false;
// }
// function geIdFromData(res: Res): number {
//   if (isSuccess(res)) {
//     return res.data.databaseId;
//   } else {
//     throw new Error(res.data.errorMessage);
//   }
// }
// -- 5 --
/*
Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
*/
// class Product {
//   constructor(
//     public id: number,
//     public title: string,
//     public price: number
//   ) {}
// }
// class Delivery {
//   constructor(
//     public date: Date
//   ) {}
// }
// class HomeDelivery extends Delivery {
//   constructor(date: Date, public address: string) {
//     super(date);
//   }
// }
// class ShopDelivery extends Delivery {
//   constructor(public shopId: number) {
//     super(new Date());
//   }
// }
// type DeliveryOptions = HomeDelivery | ShopDelivery;
// class Cart {
//   private products: Product[] = [];
//   private delivery: DeliveryOptions;
//   public addProduct(product: Product): void {
//     this.products.push(product);
//   }
//   public deleteProductById(productId: number): void {
//     this.products =  this.products.filter((p: Product) => p.id !== productId);
//   }
//   public getSum(): number {
//     return this.products
//       .map((p: Product) => p.price)
//       .reduce((p1: number, p2: number) => p1 + p2);
//   }
//   public setDelivery(delivery: DeliveryOptions): void {
//     this.delivery = delivery;
//   }
//   public checkOut() {
//     if (this.products.length == 0) {
//       throw new Error('Нет ни одного товара в корзине');
//     }
//     if (!this.delivery) {
//       throw new Error('Не указан способ доставки');
//     }
//     return { success: true };
//   }
// }
// const cart = new Cart();
// cart.addProduct(new Product(1, 'Печенье', 10));
// cart.addProduct(new Product(2, 'Сироп', 30));
// cart.addProduct(new Product(3, 'Молоко', 40));
// cart.deleteProductById(1);
// // cart.setDelivery(new HomeDelivery(new Date(), 'Москва, улица Туполева, 2'));
// console.log(cart.getSum());
// console.log(cart.checkOut());
// -- 6 --
/*
Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
*/
// abstract class Logger {
//   abstract log(message: string):void;
//   printDate(date: Date) {
//     this.log(date.toString());
//   }
// }
// class MyLogger extends Logger {
//   log(message: string): void {
//     console.log(message);
//   }
//   logWithDate(message: string) {
//     this.printDate(new Date());
//     this.log(message);
//   }
// }
// const logger = new MyLogger();
// logger.logWithDate('My message');
// --------------------------
/*
  Необходимо написать функцию toString, которая принимает любой тип
  и возвращает его строковое представление. Если не может, то
  возвращает undefined.
*/
// function toString<T>(data: T): string | undefined {
//   if (Array.isArray(data)) {
//     return data.toString();
//   }
//   switch (typeof data) {
//     case "string":
//       return data;
//     case "number":
//     case "bigint":
//     case "symbol":
//     case "boolean":
//     case "function":
//       return data.toString();
//     case "object":
//       return JSON.stringify(data);
//     default:
//       return undefined;
//   }
// }
// console.log(toString(Math.abs));
// console.log(toString(3));
// console.log(toString(false));
// console.log(toString({rer: "sfddd"}));
// console.log(toString(["sd", "as"]));
// -- 9 --
/*
  Необходимо написать функцию сортировки любых объектов, которые имеют id по убюванию и по возрастанию.
*/
const data = [
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Оля' },
    { id: 2, name: 'Петя' },
];
function sortObj(data, type) {
    if (type === 'asc') {
        return data.sort((a, b) => a.id - b.id);
    }
    if (type === 'desc') {
        return data.sort((a, b) => b.id - a.id);
    }
    return data.sort((a, b) => a.id - b.id);
}
function sort(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sort(data, 'desc'));
console.log(sort(data));
//# sourceMappingURL=test.js.map