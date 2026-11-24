// Configuración de Firebase del proyecto dtalles-any.
// No es una contraseña: Google la diseñó para ir dentro de la app. La seguridad está en firestore.rules.
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA5YE7BnSwxxUPVyCsD1vIOMpMeAoTRy9s",
  authDomain: "dtalles-any.firebaseapp.com",
  projectId: "dtalles-any",
  storageBucket: "dtalles-any.firebasestorage.app",
  messagingSenderId: "601731454466",
  appId: "1:601731454466:web:eb0402c980f8081baeb91b"
};

// Administradores iniciales. Por privacidad no se guardan los correos, sino su huella SHA-256
// (correo en minúsculas). Al entrar por primera vez, si la huella coincide, se crea su perfil de administrador.
// Los demás perfiles se agregan desde la app, en "Perfiles".
export const ADMINS_INICIALES = {
  "920d57b0db2d80c32f820ecde1f1de8691dc9b5927aa80c01526e336eef1ce37": "Kenneth",
  "a0bcd9efb82bda4e455f8e3a942f510b471e34dd0895db29da2342c53cc0020f": "Ana",
  "543f2fc180bcf01dcaa6eb5a76af652fe0dc94986c3c3f34cf7ae73de4ba1309": "Tere",
};
