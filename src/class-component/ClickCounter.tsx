import React, { Component, ReactNode } from 'react';
import HighOrderComponent from '../HOC/HighOrderComponent';

interface Props {
  increment: ReactNode;
  count: number;
};

interface State {
  count: number;
}

class ClickCounter extends Component<Props, State> {

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          clicled {this.props.count} times
        </button>
      </div>
    )
  }
};

export default HighOrderComponent(ClickCounter);
