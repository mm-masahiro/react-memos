import React, { Component } from 'react';

interface Props {};

interface State {
  count: number;
}

export default class ClickCounter extends Component<Props, State> {
  // HoverCounterと共通のロジック
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
    return (
      <div>
        <button onClick={this.incrementCount}>
          clicled {this.state.count} times
        </button>
      </div>
    )
  }
};
