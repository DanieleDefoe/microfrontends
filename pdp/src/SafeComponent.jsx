import { Component } from 'react';

class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>SOMETHING WENT WRONG!</h1>;
    }

    return this.props.children;
  }
}

export default SafeComponent;
