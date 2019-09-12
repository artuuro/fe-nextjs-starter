import { Config } from "./";

class Network {
    constructor() {
      this.URL = Config.apiUrl && Config.apiUrl != '' ? Config.apiUrl : false;
      if (!this.URL) console.error(`apiUrl missing in configuration`);
    }
}

export default Network;
