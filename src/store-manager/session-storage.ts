/* eslint-disable @typescript-eslint/require-await */
import { TokenManager } from '../types/types';

class SessionStorage implements TokenManager {
  key = 'identifo_access_token';

  isAccessible = true;

  constructor(key?:string) {
    this.key = key || this.key;
  }

  saveToken(token:string):boolean {
    if (token) {
      window.sessionStorage.setItem(this.key, token);
      return true;
    }
    return false;
  }

  getToken():string {
    return window.sessionStorage.getItem(this.key) ?? '';
  }

  deleteToken():void {
    window.sessionStorage.removeItem(this.key);
  }
}

export default SessionStorage;
