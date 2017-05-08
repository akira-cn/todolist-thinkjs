'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {
  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  init(http){
    super.init(http);
  }
  async getAction(){
    this.status(405);
    return this.fail(405, 'method not allowed');
  }
  /**
   * before magic method
   * @return {Promise} []
   */
  __before(){
    
  }
}