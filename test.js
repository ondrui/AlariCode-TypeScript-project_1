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
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length == 0) {
            throw new Error('Нет ни одного товара в корзине');
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Печенье', 10));
cart.addProduct(new Product(2, 'Сироп', 30));
cart.addProduct(new Product(3, 'Молоко', 40));
cart.deleteProductById(1);
// cart.setDelivery(new HomeDelivery(new Date(), 'Москва, улица Туполева, 2'));
console.log(cart.getSum());
console.log(cart.checkOut());
