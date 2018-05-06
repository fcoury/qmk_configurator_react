import React, { Component } from 'react';
import 'whatwg-fetch'

import Controller from './components/Controller';
import KeymapEditor from './components/KeymapEditor';

class App extends Component {
  render() {
    return (
      <div>
        <Controller />
        <KeymapEditor />
        <p style={{clear: 'both'}} id="keycodes-section">
          <label>Keycodes:</label>
        </p>
        <p className="hint">
          <a href="https://docs.qmk.fm/keycodes" title="Keycodes reference" target="_blank" rel="noopener noreferrer">
            Keycodes reference
          </a>
        </p>
        <div id="keycodes" />
        <p />
      </div>
    );
  }
}

export default App;
