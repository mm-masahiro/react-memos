import React from 'react';

interface Props {};

interface State {
  count: number;
};

const HighOrderComponent = OriginalComponent => {
  class NewComponent extends React.Component<Props, State> {
    constructor(props: Props & State) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1};
      });
    };

    render() {
      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
    }
  }
  return NewComponent
}

export default HighOrderComponent
