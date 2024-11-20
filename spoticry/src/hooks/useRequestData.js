import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setLoading(true);
    const token = localStorage.getItem("spoticry_token"); 

    if (!token) {
      setError("Usuário não autenticado.");
      setLoading(false);
      return;
    }

    axios
      .get(url, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Erro ao buscar dados");
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data, loading, error];
};
