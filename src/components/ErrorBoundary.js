import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
              <h2 style={{ textAlign: "center" }}>
                Oops, something went wrong... We are doing our best to fix the issue
              </h2>
            );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
