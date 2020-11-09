import React from 'react';

const useFetch = () => {
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error('Um erro aconteceu.');
    } catch (e) {
      json = null;
      setError('Ocorreu um erro.');
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  });

  return { error, data, loading, request };
};

export default useFetch;
