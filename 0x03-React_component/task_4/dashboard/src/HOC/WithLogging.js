import React, { Component } from "react";

export default function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      const componentName = (WrappedComponent.displayName || WrappedComponent.name || "Component");
      console.log(`${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = (WrappedComponent.displayName || WrappedComponent.name || "Component");
      console.log(`${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  WithLogging.displayName = `WithLogging${WrappedComponent.displayName || WrappedComponent.name || "Component"}`;
}