import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain:process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").push({
//   description: "water",
//   note: "a text",
//   amount: 190,
//   createdAt: 976123498763,
// });
// database.ref("expenses").push({
//   description: "ligth",
//   note: "a string",
//   amount: 200,
//   createdAt: 976123498763,
// });
// database.ref("expenses").push({
//   description: "internet",
//   note: "a message",
//   amount: 300,
//   createdAt: 976123498763,
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
//     }, (e) => {
//         console.log('error with data fetching', e)
// });

// database.ref().set({
//     name: 'Lidia Maria',
//     age: 19,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Santo Domingo',
//         country: 'United States'
//     }
// })
// database.ref('attributes').set({
//     height: 5.1,
//     weight: 110
// }).then(() => {
//     console.log('Data is saved')
// }).catch((err) => {
//     console.log('error:',err)
// })

// database.ref().update({
//     'job/company': 'Amazon',
//     stressLevel: 9,
//     'location/city': 'Seattle'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('job/title').set('Tester');
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000)

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('data saved')
//     }).catch((err) => {
//         console.log('error:', err)
//     })

// console.log('i made a request to change the data')
