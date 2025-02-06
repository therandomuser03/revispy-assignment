// src/utils/updateUserSelections.ts
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

export const updateUserSelections = async (selectedCategories: string[]) => {
  if (auth.currentUser) {
    // Reference to a document in the "userSelections" collection keyed by the user's UID
    const userDocRef = doc(db, "userSelections", auth.currentUser.uid);
    try {
      await setDoc(userDocRef, { categories: selectedCategories }, { merge: true });
      console.log("User selections updated in Firestore.");
    } catch (error) {
      console.error("Error updating user selections:", error);
    }
  }
};
