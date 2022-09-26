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
