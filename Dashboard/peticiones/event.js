import axios from "axios";

export const eventPeticion = async ({ eventData, succes, error, loading }) => {
  try {
    const token = await localStorage.getItem("token");

    loading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("/event/add", eventData, config);

    succes(response.data.evento.id);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const eventGetAll = async ({ success, error, loading }) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);

    const response = await axios.get("/event/all", { headers: headers });

    success(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const eventUpdateState = async ({ eventId, succes, error, loading }) => {
  try {
    const token = await localStorage.getItem("token");

    loading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(`/event/publicar/${eventId}`, {}, config);
    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const getCategories = async ({ eventId, succes, error, loading }) => {
  try {
    const token = await localStorage.getItem("token");

    loading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`/event/findEventById/${eventId}`, config);
    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const updateDataEvent = async ({
  eventId,
  succes,
  error,
  loading,
  data,
}) => {
  try {
    const token = await localStorage.getItem("token");

    loading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.patch(
      `/event/editEventCategoria/${eventId}`,
      data,
      config
    );
    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const myEventsPeticion = async ({ succes, error, loading }) => {
  try {
    const token = await localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);

    const response = await axios.get("/event/myEvents", { headers: headers });

    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const getEventsforTime = async ({ succes, error, loading }) => {
  try {
    const token = await localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);

    const response = await axios.get("/event/allEventsByStatus", {
      headers: headers,
    });

    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const deleteEvent = async ({ eventId, succes, error, loading }) => {
  try {
    const token = localStorage.getItem("token");
    loading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(
      `/events/deleteEventById/${eventId}`,
      config
    );
    succes(response.data);

    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const eventByIdPeticion = async ({ succes, error, loading, id }) => {
  try {
    const token = await localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);

    const response = await axios.get(`/event/findEventById/${id}`, {
      headers: headers,
    });

    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const eventByIdPeticionInscripted = async ({
  succes,
  error,
  loading,
  id,
}) => {
  try {
    const token = await localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);

    const response = await axios.get(
      `/event/findEventWithInscriptionDetailById/${id}`,
      { headers: headers }
    );

    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const getPruebaInscriptos = async ({ id, success, error, loading }) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    loading(true);
    const response = await axios.get(`/resultados/recibirInscriptos/${id}`, {
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

export const sendResults = async ({ data, succes, error, loading }) => {
  try {
    const token = await localStorage.getItem("token");

    loading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(`/resultados/agregar`, data, config);
    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};

export const updatePrueba = async ({
  eventId,
  succes,
  error,
  loading,
  data,
}) => {
  try {
    const token = await localStorage.getItem("token");

    loading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.put(
      `pruebas/updatePrueba/${eventId}`,
      data,
      config
    );
    succes(response.data);
    loading(false);
  } catch (err) {
    loading(false);
    error(err);
  }
};


//BUSCAR CABALLO POR NOMBRE PARA INSCRIPCION AL EVENTO DEL RIDER
export const searchHorseByName = async ({loading, error, succes, horsesName}) => {
  const token = await localStorage.getItem("token");
   try {

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      loading(true)
      
      const response = await axios.get(`/horse/searchHorseByName/${horsesName}`, { headers: headers })
          succes(response.data)
          loading(false)
          }
  catch(err) {
      loading(false)
      error(err)
  }
}

//buscar el caballo por id en la bdd
// export const selectHorseById = async ({loading, error, succes, horsesId}) => {
//   const token = await localStorage.getItem("token");
//    try {
//       const headers = {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       };
//       loading(true)
      
//       const response = await axios.get(`/horse/selectHorseById/${horsesId}`, { headers: headers })
//           succes(response.data)
//           loading(false)
//           }
//   catch(err) {
//       loading(false)
//       error(err)
//   }
// }

