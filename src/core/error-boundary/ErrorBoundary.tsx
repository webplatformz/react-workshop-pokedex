import { Component, PropsWithChildren } from "react";
import DefaultLayout from "../../shared/default-layout/DefaultLayout";

type ErrorBoundaryState = {
  hasError: boolean;
  error: any;
};

/**
 * An error boundary has to be implemented using a class component
 */
class ErrorBoundary extends Component<
  PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  // perform side effects such as logging here
  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  // pure function
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      console.error(this.state.error);
      return (
        <DefaultLayout>
          <h2>A wild error appeared</h2>
        </DefaultLayout>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
