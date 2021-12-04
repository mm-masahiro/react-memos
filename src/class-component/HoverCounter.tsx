import React, { Component } from 'react'

interface Props {};

interface State {
  count: number;
};

export default class HoverCounter extends Component<Props, State> {
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
        <h3 onMouseOver={this.incrementCount}>
          Hover {this.state.count} times
        </h3>
      </div>
    )
  }
};
