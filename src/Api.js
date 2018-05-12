const API_URL = 'https://compile.clueboard.co/v1';

export default class Api {
  static getKeyboards() {
    return fetch(`${API_URL}/keyboards`).then(r => r.json());
  }

  static getKeyboard(name) {
    return fetch(`${API_URL}/keyboards/${name}`).then(r => r.json());
  }

  static getReadme(name) {
    return fetch(`${API_URL}/keyboards/${name}/readme`).then(r => r.text());
  }
}
