import { Network } from "./";

class Helpers {
  constuctor(memory) {
    this.memory = memory;
  }

  getToken() {
    return this.memory.get('token');
  }

  checkAuthentication() {
    // TODO:
    // Remote authentication call:
    this.memory.set('token', 'TEMPORARY_TOKEN');

    return this.getToken()
    ? true
    : false;
  }

  isAuthenticated() {
    return this.checkAuthentication();
  }
}

export default Helpers;
