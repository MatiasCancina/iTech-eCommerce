// Error.
'use client'
import { useEffect } from 'react';
import ErrorUI from '../components/ui/Error.jsx';

export default function Error({ errorMessage, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(errorMessage);

    // Set a user-friendly error message
  }, [errorMessage]);

  return (
<ErrorUI/>  );
}
