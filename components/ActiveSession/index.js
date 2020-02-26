import React from 'react';

// {words: [["b", , , "n", ], [, "o", ], [, , ], [, , , , , ]]}
const ActiveSession = ({words}) => {
  return (
    <pre>{JSON.stringify(words, null, 2)}</pre>
  );
}

export default ActiveSession;
