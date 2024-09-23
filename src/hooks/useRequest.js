/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";

export default function (request) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erorr, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    request()
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finaly(() => setLoading(false));
  }, []);

  return [data, loading, erorr];
}
