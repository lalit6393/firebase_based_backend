const admin = require('firebase-admin');

const serviceAccount = require('./creds');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database();

db.ref('.info/connected').on('value', (snapshot) => {
    if (snapshot.val() === true) {
      console.log('Firebase database connected!');
    } else {
      console.log('Firebase database disconnected.');
    }
  });

module.exports =  db;
