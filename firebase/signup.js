import { ManageAccount } from './config.js';
import { addDoc,setDoc, collection, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

document.getElementById("sign-up").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const account = new ManageAccount();
  account.register(email, password);

});