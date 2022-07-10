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

enum StatusCode {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

async function getFaqs(req: { topicId: number; status: StatusCode }): Promise<
  {
    question: string;
    answer: string;
    tag: string[];
    likes: number;
    status?: StatusCode;
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
