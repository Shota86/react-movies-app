import React from "react";

function ErrorBoundary(props) {
  const OoopsText = () => {
    return (
      <h2 style={{ textAlign: "center" }}>
        Oops, something went wrong... We are doing our best to fix the issue
      </h2>
    );
  };

  let isEveryThingOK = true;

  return <>{isEveryThingOK ? props.children : OoopsText()}</>;
}

export default ErrorBoundary;
