import { ManageAccount } from './config.js';
import { getFirestore, getDocs, collection, doc, query, where, getDoc  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const account = new ManageAccount();
    account.authenticate(email, password);
  
  });

