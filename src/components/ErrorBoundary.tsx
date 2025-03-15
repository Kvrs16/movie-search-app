import React from "react";

interface ErrorBoundaryProps {
  message?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  message = "Something went wrong!",
}) => {
  return (
    <div className="error-message">
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBoundary;
