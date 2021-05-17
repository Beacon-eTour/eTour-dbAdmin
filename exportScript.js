const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function getDocuments(name) {
    await db.collection(name).get().then(function(querySnapshot) {

         querySnapshot.forEach(doc => {
            data = doc.data();
            fs.writeFile(name + "/" + doc.id + ".json", JSON.stringify(data), function (err) {
                if (err) return console.log(err);
                console.log(doc.id + name);
              });
         });

         return true
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        return false
    });

}

getDocuments("localizations");
getDocuments("tours");

