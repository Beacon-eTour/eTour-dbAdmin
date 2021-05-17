const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Replace the dir name of whatever you want to import, note that dirName will also be the name of your collection
const dirName = 'localizations'
fs.readdir(dirName, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  files.forEach(function (file) {
    let rawData = fs.readFileSync(dirName + '/' + file)

    let jsonData = JSON.parse(rawData)
    console.log(jsonData)

    // Replace the docName of whatever unique you want to call it
    const docName = file.replace('.json', '').toLowerCase();
    const docRef = db.collection(dirName).doc(docName.toString());
    docRef.set(jsonData);

  });
  console.log("succesfully imported")
  return;
});

