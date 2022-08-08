import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAvSDYd9Hm1k6V9TXBdNcWzZJevgNf_9n4",

    authDomain: "crwn-clothing-db-3672b.firebaseapp.com",
  
    projectId: "crwn-clothing-db-3672b",
  
    storageBucket: "crwn-clothing-db-3672b.appspot.com",
  
    messagingSenderId: "1098990207483",
  
    appId: "1:1098990207483:web:bbb3733e9144a0d2bf8b5e"  
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', auth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { email, name } = auth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                name,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log(error)
        }
    } 

    return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}


  