// auth.js
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);

export function signupUser(email, password, username, age, gender, country) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);

      // Save additional user data to Firestore
      saveUserDetails(user.uid, username, age, gender, country);
    })
    .catch((error) => {
      console.error("Signup Error:", error.message);
    });
}

function saveUserDetails(uid, username, age, gender, country) {
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
  const db = getFirestore(app);

  setDoc(doc(db, "users", uid), {
    username: username,
    age: age,
    gender: gender,
    country: country,
    followers: [],
    following: [],
    bio: "",
    profilePicture: "default-profile-picture-url",
  })
    .then(() => {
      console.log("User data saved successfully.");
      window.location.href = "profile.html";
    })
    .catch((error) => {
      console.error("Error saving user data:", error.message);
    });
}
