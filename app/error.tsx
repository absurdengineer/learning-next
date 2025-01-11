"use client";

/// These two props are automatically injected by the next.js
/// because of the filename error.tsx
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.error("Error ", error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button onClick={reset} className="btn btn-outline">
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
