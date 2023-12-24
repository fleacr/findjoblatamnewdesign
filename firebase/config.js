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
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        toast.classList.add('toast-successfull');
        toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/clouds/100/checked--v1.png" alt="checked--v1"/> Registro exitoso. Se envió un correo de verificación a su email con los pasos a seguir.';
        toastBox.appendChild(toast);
        setTimeout(()=>{
          toast.remove();
        },15000)
        /* window.location.href = "coming-soon.html"; */
      })
      .catch((error) => {
        console.error(error.message);
        switch (String(error.message)){
          
          case "Firebase: Error (auth/email-already-in-use).":
            toast.classList.add('toast');
            toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> Email ya en uso';
            toastBox.appendChild(toast);
            setTimeout(()=>{
              toast.remove();
            },2500)
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            toast.classList.add('toast');
            toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> Su password debe tener más de 6 carácteres';
            toastBox.appendChild(toast);
            setTimeout(()=>{
              toast.remove();
            },2500)
            break;
            case "Firebase: Error (auth/missing-email).":
              toast.classList.add('toast');
              toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> El campo de email está vacío';
              toastBox.appendChild(toast);
              setTimeout(()=>{
                toast.remove();
              },2500)
              break;
          case "Firebase: Error (auth/missing-password).":
            toast.classList.add('toast');
            toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> El campo de contraseña está vacío';
            toastBox.appendChild(toast);
            setTimeout(()=>{
              toast.remove();
            },2500)
            break;
            case "Firebase: Error (auth/invalid-email).":
              toast.classList.add('toast');
              toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> Email inválido';
              toastBox.appendChild(toast);
              setTimeout(()=>{
                toast.remove();
              },2500)
              break;
          default:
            toast.classList.add('toast');
            toast.innerHTML= 'Ha ocurrido un error' + error.message;
            toastBox.appendChild(toast);
/*             alert("Error al registrarse: " + error.message); */
            break;
        }
      });
  }

  authenticate(email, password) {
    let toastBox = document.getElementById('toastBox');
    let toast = document.createElement('div');
    toast.classList.add('toast');
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        window.location.href = "coming-soon.html";
      })
      .catch((error) => {
        console.error(error.message);
        switch (String(error.message)) {
          case "Firebase: Error (auth/invalid-login-credentials).":
            toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> Las credenciales no son correctas';
            toastBox.appendChild(toast);
            setTimeout(()=>{
              toast.remove();
            },2500)
            break;
          case "Firebase: Error (auth/missing-password).":
            toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> El campo de contraseña está vacío';
            toastBox.appendChild(toast);
            setTimeout(()=>{
              toast.remove();
            },2500)
            break;
          case "Firebase: Error (auth/invalid-email).":
             toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> Email inválido';
             toastBox.appendChild(toast);
             setTimeout(()=>{
             toast.remove();
            },2500)
            break;
          case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
            toast.innerHTML= '<img width="60" height="60" src="https://img.icons8.com/clouds/100/cancel.png" alt="cancel"/> Este correo ha sido bloqueado, pongase en contacto con nuestra cuenta de instagram @findjoblatam';
            toastBox.appendChild(toast);
            setTimeout(()=>{
              toast.remove();
            },2500)
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
