# etour-admin-scripts

Admin scripts to modify the data on Firestore. Also holds reference db json files.

## Installation

Runs on node.js, instructions here: https://nodejs.org/en/download/package-manager/

Requires serviceAccount.json, which you need to create in the GCP console. Put this on the root of the project.

## How to run this thing?

There is two scripts:
1. `exportScript.js` holds a function `getDocuments(name)`, where name is the name of the collection you want to export from Firestore. The collection is saved into a directory named after the collection, and all the documents inside the directory are broken down into into .json files.
2. `importWithCustomId.js` imports all the files in a directory to the Firestore database as documents. The `const dirName`is the parameter here you'd like to change. That determines the directory name which holds your json files you'd like to import to Firestore. The name of the collection will also be the name of this directory, and the file name of a json file will be the name of your document. Note that any existing data within the document will be overwritten by the new data, so be careful.

## How to run this thing?
Just run `node importWithCustomId.js` or `node exportScript.js`