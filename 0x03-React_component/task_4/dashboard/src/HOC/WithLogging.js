import React, { Component } from "react";

export default function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      const componentName = (WrappedComponent.displayName || WrappedComponent.name || "Component");
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = (WrappedComponent.displayName || WrappedComponent.name || "Component");
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      // Render the wrapped component and pass down any props
      return <WrappedComponent {...this.props} />
    }
  }

  // Set the displayName for the HOC
  WithLogging.displayName = `WithLogging${WrappedComponent.displayName || WrappedComponent.name || "Component"}`;

  return WithLogging;
}