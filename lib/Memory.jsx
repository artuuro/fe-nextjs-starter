class Memory {
  storage;

  constructor(store) {
    this.storage = store
      ? store
      : {};
  }

  getAll() {
    return this.storage;
  }

  put(records) {
    const keys = Object.keys(records);
    let results = {};
    for (const key of keys) {
      this.update(key, records[key]);
      results[key] = this.get(key);
    }
    return results;
  }

  update(key, record) {
    return this.storage.setItem(key, record);
  }

  get(key) {
    return this.storage.getItem(key);
  }

  delete(key) {
    return this.storage.removeItem(key);
  }

  truncate() {
    return this.storage.clear();
  }
}

export default Memory;
