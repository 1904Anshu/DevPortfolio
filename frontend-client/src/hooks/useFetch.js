import React from "react";
import { useEffect, useState } from "react";
import api from "../services/api";

const useFetch = (endpoint, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get(endpoint);
        if (isMounted) setData(res.data);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
