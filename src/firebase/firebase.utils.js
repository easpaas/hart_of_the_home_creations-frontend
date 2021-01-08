import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDp7H4i90OU5ZYw9XAqXmGEUtSC_iw5lUA",
    authDomain: "hartofthehomecreations-58fbd.firebaseapp.com",
    projectId: "hartofthehomecreations-58fbd",
    storageBucket: "hartofthehomecreations-58fbd.appspot.com",
    messagingSenderId: "74802396294",
    appId: "1:74802396294:web:c218b11bb47f3aea6c6507",
    measurementId: "G-5DV231H54H"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    console.log(snapShot)
    const collectionSnapshot = await collectionRef.get();
    console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });

    if (!snapShot.exists) {
        const { displayName, email } = userAuth; 
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    } 
    return userRef;
}

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
    ) => {
    const collectionRef = firestore.collection(collectionKey);

    // batch obj - groups all sets for firestore
    const batch = firestore.batch();

    // call batch set on each element
    objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();
        console.log(`firestore doc.data: ${JSON.stringify(items)}`)

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id, 
            title, 
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;