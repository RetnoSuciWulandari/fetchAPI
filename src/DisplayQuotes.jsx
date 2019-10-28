import React from "react";

const DisplayQuotes = ({ q }) => {
  return (
    <div>
      <h1>{q.character}</h1>
      <h2>Character Direction: {q.characterDirection}</h2>
      <img src={q.image} alt="Homer" />
      <h3>{q.quote}</h3>
    </div>
  );
};

export default DisplayQuotes;
