import React, { Component } from 'react'

import Layers from './Layers';
import Keymap from './Keymap';

export default class KeymapEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: this.props.layout,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.layout !== nextProps.layout) {
      this.setState({ layout: nextProps.layout });
    }
  }

  render() {
    return (
      <div className="split-content">
        <Layers />
        <Keymap layout={this.state.layout} />
      </div>
    )
  }
}
