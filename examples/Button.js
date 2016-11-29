// @flow

import { Component } from 'react'; // eslint-disable-line import/no-unresolved,import/no-extraneous-dependencies,import/extensions

type Props = {
  title: string,
  visited: boolean,
  onClick: () => void,
};

type DefaultProps = {
  visited: boolean,
};

type State = {
  display: 'static' | 'hover' | 'active',
};

type MouseFn = () => void;

export default class Button extends Component<DefaultProps, Props, State> {
  static defaultProps = { visited: false };
  state = { display: 'static' };

  onMouseEnter: MouseFn = () => this.setState({ display: 'hover' });
  onMouseLeave: MouseFn = () => this.setState({ display: 'static' });
  onMouseDown: MouseFn = () => this.setState({ display: 'active' });

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onClick={this.props.onClick}
      >
        {this.props.title}
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}
