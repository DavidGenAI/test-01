import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebaseApp from "./firebase-init";

const db = getFirestore(firebaseApp);

// Function to save user profile
export const saveUserProfile = async (userId, profileData) => {
  try {
    await setDoc(doc(db, "users", userId), profileData);
  } catch (error) {
    throw error;
  }
};

// Function to fetch user profile
export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("User profile does not exist");
    }
  } catch (error) {
    throw error;
  }
};

export default db;
