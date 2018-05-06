import React, { Component } from 'react'

export default class Keymap extends Component {
  render() {
    return (
      <div className="right-side">
        <p><label>Keymap:</label></p>
        <div id="visual-keymap" />
      </div>
    )
  }
}
