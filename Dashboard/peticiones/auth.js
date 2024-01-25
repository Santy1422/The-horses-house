import { signInWithEmailAndPassword } from "firebase/auth"; // Asegúrate de importar la función correcta de Firebase
import axios from "axios";

export const registerWithGoogle = async ({
  email,
  firstName,
  lastName,
  setUser,
  aud,
  azp,
  loading,
  error,
}) => {
  try {
    const response = await axios.post(
      "/user/googleauth",
      {
        email,
        firstName,
        lastName,
        setUser,
        aud,
        azp,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("accessToken", response.data.payload.user.token);

    setUser(response.data.payload.user);
  } catch (error) {
    throw error;
  }
};

export const googleComplet = async ({
  company,
  country,
  password,
  url,
  setUser,
  aud,
  azp,
  loading,
  error,
}) => {
  try {
    let token = localStorage.getItem("accessToken");
    const response = await axios.post(
      "/user/googleudpload",
      {
        company,
        country,
        password,
        url,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUser(response.data.payload.user);
  } catch (error) {
    throw error;
  }
};

export async function verifyToken({ google, setUser, loading, error }) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID; // Reemplaza con tu ID de cliente
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${google}`
  );

  if (response.data.aud === CLIENT_ID) {
    // El token es válido y se emitió para tu cliente
    setUser(response.data);
  } else {
    // El token no es válido para tu cliente
    throw new Error("Token inválido");
  }
}

// Función de inicio de sesión
export const login = async ({ email, password, succes, error, loading }) => {
  try {
    loading(true);
    // Llama a la función de inicio de sesión de Firebase con el correo electrónico y la contraseña
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // userCredential.user contiene información del usuario, si es necesario
    succes(userCredential.user);
    loading(false);
  } catch (err) {
    error(err); // Lanza el error para manejarlo en la llamada al método
    loading(false);
  }
};

export const LoginWithBack = async ({
  professions,
  answers,
  name,
  lastName,
  loading,
  error,
  succes,
}) => {
  try {
    let token = await localStorage.getItem("firebaseToken");
    let headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    //le habia puesto /user/register pero lo volvi a dejar como antes para pushear!
    let response = await axios.post(
      "/user/authGoogle",
      { professions, answers, name, lastName },
      { headers: headers }
    );
    console.log("resp.data", response.data);
    succes(response.data);
  } catch (err) {
    console.log("err", err);
    error(err);
  }
};

export const realodadUser = async ({ token, loading, error, succes }) => {
  try {
    loading(true);

    let headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    let response = await axios.get("/user/getUserById", { headers: headers });
    succes(response.data);
    loading(false);
  } catch (err) {
    error(err);
    loading(false);
  }
};
