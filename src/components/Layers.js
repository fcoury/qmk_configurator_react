import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div className="left-side">
        <p><label>Layer:</label></p>
        <div id="layers">
          <div className="layer 15">15</div>
          <div className="layer 14">14</div>
          <div className="layer 13">13</div>
          <div className="layer 12">12</div>
          <div className="layer 11">11</div>
          <div className="layer 10">10</div>
          <div className="layer 9">9</div>
          <div className="layer 8">8</div>
          <div className="layer 7">7</div>
          <div className="layer 6">6</div>
          <div className="layer 5">5</div>
          <div className="layer 4">4</div>
          <div className="layer 3">3</div>
          <div className="layer 2">2</div>
          <div className="layer 1">1</div>
          <div className="layer active 0">0</div>
        </div>
      </div>
    )
  }
}
