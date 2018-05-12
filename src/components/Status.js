import React, { Component } from 'react'

export default class Status extends Component {
  render() {
    return (
      <textarea id="status" readOnly value={this.props.value} />
    );
  }
}
