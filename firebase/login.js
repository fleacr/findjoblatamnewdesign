import { ManageAccount } from './config.js';


document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const account = new ManageAccount();
    account.authenticate(email, password);
  
  });