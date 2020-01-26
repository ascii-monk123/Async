/**
 * Easy http library
 *
 * @version 3.0.0
 * @author Brad Traversy
 * @license MIT
 */

class HTTP {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    return 'Resource deleted';
  }
}
