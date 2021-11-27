import { useCallback, useEffect, useState } from "react";

const API_URL = "http://localhost:41399/api";

export const useGet = (entity, { onCompleted } = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/${entity}`);
    const resData = await res.json();
    if (onCompleted) {
      onCompleted(resData);
    }
    setData(resData);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refetch: fetchData };
};

export const deleteRecord = async (entity, id) => {
  try {
    const res = await fetch(`${API_URL}/${entity}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert(`${entity} eliminado exitosamente`);
    }
  } catch (error) {
    alert(`Error al eliminar el ${entity}`);
  }
};

export const createRecord = async (entity, body) => {
  try {
    await fetch(`${API_URL}/${entity}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    
  } catch (error) {
    
  }
};
