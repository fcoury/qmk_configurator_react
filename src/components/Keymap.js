import React, { Component } from 'react'
import _ from 'lodash';

const defaults = {
  MAX_X: 775,
  KEY_WIDTH: 40,
  KEY_HEIGHT: 40,
  SWAP_KEY_WIDTH: 30,
  SWAP_KEY_HEIGHT: 30,
  KEY_X_SPACING: 45,
  KEY_Y_SPACING: 45,
  SCALE: 1
};
const config = _.cloneDeep(defaults);

export default class Keymap extends Component {
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

  calcKeyKeymapDims(w, h) {
    return {
      w: w * config.KEY_X_SPACING - (config.KEY_X_SPACING - config.KEY_WIDTH),
      h: h * config.KEY_Y_SPACING - (config.KEY_Y_SPACING - config.KEY_HEIGHT)
    };
  }

  calcKeyKeymapPos(x, y) {
    return {
      x: x * config.KEY_X_SPACING,
      y: y * config.KEY_Y_SPACING
    };
  }

  render() {
    const layout = this.props.layout || [];
    console.log('this.props', this.props);
    const max = { x: 0, y: 0 };
    layout.forEach(d => {
      console.log(' xxx', d);
      if (!d.w) {
        d.w = 1;
      }
      if (!d.h) {
        d.h = 1;
      }

      var pos = this.calcKeyKeymapPos(d.x, d.y);
      var dims = this.calcKeyKeymapDims(d.w, d.h);
      max.x = Math.max(max.x, pos.x + dims.w);
      max.y = Math.max(max.y, pos.y + dims.h);
    });

    if (max.x > defaults.MAX_X) {
      config.SCALE = defaults.MAX_X / max.x;
      config.KEY_WIDTH *= config.SCALE;
      config.KEY_HEIGHT *= config.SCALE;
      config.SWAP_KEY_HEIGHT *= config.SCALE;
      config.SWAP_KEY_WIDTH *= config.SCALE;
      config.KEY_X_SPACING *= config.SCALE;
      config.KEY_Y_SPACING *= config.SCALE;
      max.x *= config.SCALE;
      max.y *= config.SCALE;
    }

    const keys = layout.map((d, k) => {
      var pos = this.calcKeyKeymapPos(d.x, d.y);
      var dims = this.calcKeyKeymapDims(d.w, d.h);
      return (
        <div
          className="key disabled"
          style={{
            left: pos.x,
            top: pos.y,
            width: dims.w,
            height: dims.h,
          }}
          id={`key-${k}`}
          key={`key-${k}`} />
      );
    });

    return (
      <div className="right-side">
        <p><label>Keymap:</label></p>
        <div id="visual-keymap" style={{width: max.x, height: max.y}}>
          {keys}
        </div>
      </div>
    )
  }
}
