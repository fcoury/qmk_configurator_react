import React, { Component } from 'react';
import 'whatwg-fetch'

import Controller from './components/Controller';
import KeymapEditor from './components/KeymapEditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { layout: null };
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>
            <a href="/">
              <img src="https://config.qmk.fm/qmk_icon_48.png" alt="QMK Logo" width={48} style={{verticalAlign: 'middle'}} />
              QMK Configurator
            </a>
          </h1>
          <p>
            QMK for potatoes - an open source configurator for QMK Firmware (only the AVR boards right now)
          </p>
        </header>
        <section>
          <div>
            <Controller onLayoutChange={this.onLayoutChange.bind(this)} />
            <KeymapEditor layout={this.state.layout} />
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
        </section>
      </div>
    );
  }

  onLayoutChange(layout) {
    this.setState({ layout });
  }
}

export default App;
