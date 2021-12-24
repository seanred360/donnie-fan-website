import { useState, useEffect } from "react";
import axios from "axios";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.baseURL = "/";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios[method](url, JSON.parse(headers), JSON.parse(body))
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    };

    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
