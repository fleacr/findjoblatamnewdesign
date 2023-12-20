import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBp8ll3jv-1HCPDx5jyY-qyQFZLkjO-Gk",
  authDomain: "find-job-latam-1700602911995.firebaseapp.com",
  projectId: "find-job-latam-1700602911995",
  storageBucket: "find-job-latam-1700602911995.appspot.com",
  messagingSenderId: "535558431997",
  appId: "1:535558431997:web:06de30ede8a2da64fb4a94",
  measurementId: "G-F95SDR5497"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    let toastBox = document.getElementById('toastBox');
    let toast = document.createElement('div');
    toast.classList.add('toast');
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        window.location.href = "coming-soon.html";
        // Mostrar alerta de registro exitoso
      })
      .catch((error) => {
        console.error(error.message);
        switch (String(error.message)){
          case "Firebase: Error (auth/email-already-in-use).":
            toast.innerHTML= 'Email ya en uso';
            toastBox.appendChild(toast);
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            toast.innerHTML= 'Su password debe de ser de más de 6 carácteres';
            toastBox.appendChild(toast);
            break;
          case "Firebase: Error (auth/missing-password).":
            toast.innerHTML= 'El campo de contraseña está vacío';
            toastBox.appendChild(toast);
            break;
          default:
            toast.innerHTML= 'El campo de contraseña está vacío' + error.message;
            toastBox.appendChild(toast);
/*             alert("Error al registrarse: " + error.message); */
            break;
        }
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        window.location.href = "coming-soon.html";
        // Mostrar alerta de inicio de sesión exitoso
      })
      .catch((error) => {
        console.error(error.message);
        switch (String(error.message)) {
          case "Firebase: Error (auth/invalid-login-credentials).":
            alert("Error al iniciar sesión: Las credenciales no son correctas");
            break;
          case "Firebase: Error (auth/missing-password).":
            alert("Error al iniciar sesión: El campo de contraseña está vacío");
            break;
          default:
            alert("Error al iniciar sesión: " + error.message);  
            break;
        }

/*         if(error.message == "Firebase: Error (auth/invalid-login-credentials)."){
          alert("Error al iniciar sesión: Las credenciales no son correctas");
        }
        if(error.message == "Firebase: Error (auth/missing-password)."){
          alert("Error al iniciar sesión: El campo de contraseña está vacío");     
        }
        else{
          // Mostrar alerta de error de inicio de sesión
          alert("Error al iniciar sesión: " + error.message);     
        } */
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
