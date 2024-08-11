import { doc, getDoc, getFirestore } from "firebase/firestore";
import { auth } from "./firebase-config";

export const getUserData = async () => {
  const db = getFirestore();
  const userRef = doc(db, "users", auth.currentUser.uid);

  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const { favorites, playlist } = userDoc.data();
      return { favorites, playlist };
    } else {
      console.log("No user data found");
      return { favorites: [], playlist: [] };
    }
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return { favorites: [], playlist: [] };
  }
};
