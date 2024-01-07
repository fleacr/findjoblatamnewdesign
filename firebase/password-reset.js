import { ManageAccount } from './config.js';
import { getAuth, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


document.getElementById("password-reset").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
  
    const account = new ManageAccount();
    account.passwordReset(email);
  
  });