import Invalid from 'components/Invalid';
import React from 'react';

interface Props {}

class WebpackLoadError extends React.Component {
  state: { hasError: boolean } = { hasError: false };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);

    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Invalid
          detailedMessage='Some error has occurred, Please check the connection or refresh the page'
          invalidMessage='Oops, error occurred'
        />
      );
    }

    return this.props.children;
  }
}

export default WebpackLoadError;
