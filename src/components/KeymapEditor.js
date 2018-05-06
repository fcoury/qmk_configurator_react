import React, { Component } from 'react'

import Layers from './Layers';
import Keymap from './Keymap';

export default class KeymapEditor extends Component {
  render() {
    return (
      <div className="split-content">
        <Layers />
        <Keymap />
      </div>
    )
  }
}
