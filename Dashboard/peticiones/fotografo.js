import axios from "axios";

export const inscripcionAEvento = async ({ data, success, error, loading }) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);
    const response = await axios.post(`/fotografo/inscribirse`, data, {
      headers: headers,
    });
    console.log(response.data, "ESTO ES LO QUE TRAE ESTE ENDPOINTSITO /fotografo/inscribirse, revisar back...");
    success(response.data);

    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const getMyEvents = async ({ success, error, loading }) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);
    const response = await axios.get(`/fotografo/misEventos`, {
      headers: headers,
    });
    console.log("response", response.data);
    success(response.data);

    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const getEventImages = async ({ eventId, success, error, loading }) => {
 console.log('id en actions', eventId)
  try {
    loading(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);
    const response = await axios.get(`/fotografo/fotoseventos/${eventId}`, {
      headers: headers,
    });

    success(response.data);

    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const eliminarMedia = async ({ url,eventId, success }) => {
   try {
     const token = localStorage.getItem("token");
     const headers = {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     };
     const response = await axios.post(`/fotografo/fotoseventos/delete`,{url: url, eventId: eventId}, {
       headers: headers,
     });
 
     success (response.data);
 
   } catch (err) {
    console.log(err)
   }
 };
 