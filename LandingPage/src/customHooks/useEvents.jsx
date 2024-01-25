import { eventAllSetEvents } from "@/redux/reducer/reducerEventAll";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const eventGetAll = async ({ succes, error, loading }) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      loading(true);

      const response = await axios.get("http://localhost:8080/event/all", {
        headers: headers,
      });
      succes(response.data);
      setEvents(response.data);
      loading(false);
    } catch (err) {
      loading(false);
      error(err);
    }
  };

  useEffect(() => {
    eventGetAll({
      succes: (v) => dispatch(eventAllSetEvents(v)),
      error: (e) => setError(e),
      loading: (l) => setLoading(l),
    });
  }, []);

  return { events, loading, error };
};
