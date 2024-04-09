// Error.
'use client'
import { useEffect } from 'react';

export default function Error({ errorMessage, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(errorMessage);

    // Set a user-friendly error message
  }, [errorMessage]);

  return (
    <div>
      <h2>{errorMessage}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
