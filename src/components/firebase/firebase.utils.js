import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyC3X3otMxnzV8Gbv5SzEu7EZ2dyG_o0Klo",
  authDomain: "crwn-db-62620.firebaseapp.com",
  projectId: "crwn-db-62620",
  storageBucket: "crwn-db-62620.appspot.com",
  messagingSenderId: "1055517588738",
  appId: "1:1055517588738:web:f9399da8a17b8f6fee161b",
  measurementId: "G-P6BL210SB4",
};

export const createUserProfileDoc = async (userAuth, additionalData)  => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, obj)

})
  // batch.set(collectionKey, itemsToAdd)
  return await batch.commit()

}

firebase.initializeApp(config);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase; 