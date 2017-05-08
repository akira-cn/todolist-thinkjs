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
    let data = await this.session('user');
    return this.success(data);
  }

  /**
   * before magic method
   * @return {Promise} []
   */
  __before(){
    
  }
}