import AppStorage from "../interfaces/AppStorage";

class Storage {
    storage: AppStorage;

    constructor(store: AppStorage) {
        this.storage = store ? store : {};
    }

    getAll() {
        return this.storage;
    }

    put(records: Object) {
        const keys = Object.keys(records);
        let results = {};
        for (const key of keys) {
            this.update(key, records[key]);
            results[key] = this.get(key);
        }
        return results;
    }

    update(key: String, record: any) {
        return this.storage.setItem(key, record);
    }

    get(key: String) {
        return this.storage.getItem(key);
    }

    delete(key: String) {
        return this.storage.removeItem(key);
    }

    truncate() {
        return this.storage.clear();
    }
}

export default Storage;