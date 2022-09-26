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
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}
function geIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
