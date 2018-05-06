import React, { Component } from 'react'

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.values !== nextProps.values) {
      this.setState({ values: nextProps.values });
    }
  }

  render() {
    console.log('this.state.values', this.state.values);
    return (
      <label>
        {this.props.label}:
        <select
          id={this.props.id}
          value={this.state.value}
          onChange={e => this.onChange(e)}>
          {this.renderOptions()}
        </select>
      </label>
    );
  }

  onChange(e) {
    const value = e.target.value;
    this.props.onChange(value)
    this.setState({ value });
  }

  renderOptions() {
    const values = this.state.values || [];
    return values.map(k => <option key={k}>{k}</option>);
  }
}
