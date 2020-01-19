/**
 * @description holds global store
 */
export class GlobalStoreManager {
  constructor() {
    this.global = {}
  }

  /**
   * @description attaches global object to global store
   * @param obj global object that you store
   * @param name global object name that you will use to call
   */
  attachGlobalObject = (obj: any, name: String) => {
    this.global[`${name}`] = obj;
  }

  /**
   * @description gets global store
   * @returns global store
   */
  getGlobalStore = () => {
    return this.global;
  }

  /**
   * @description cleans global store
   */
  cleanGlobalStore = () => {
    this.global = {}
  }

  /**
   * global store
   */
  private global: any
}