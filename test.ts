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
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) {}
}

class Delivery {
  constructor(
    public date: Date
  ) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProductById(productId: number): void {
    this.products =  this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkOut() {
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
