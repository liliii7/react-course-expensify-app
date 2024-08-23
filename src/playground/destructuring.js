// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


const item = ['Coffe (hot)','2.00','2.50','2.75'];

const [coffe, , price] = item;

console.log(`A medium ${coffe} costs ${price}`)