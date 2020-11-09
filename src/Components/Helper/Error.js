import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <p styles={{ color: 'green' }}>Atenção: {error}</p>;
};

export default Error;
