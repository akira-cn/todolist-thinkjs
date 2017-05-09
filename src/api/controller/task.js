'use strict';

import Rest from './rest.js';

/**
 * rest controller
 * @type {Class}
 */
export default class extends Rest {
  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  init(http){
    super.init(http);
  }

  async getAction(){
    let {gid} = this._user;
    console.log(gid);
    let data = await this.session('user');
    return this.success(data);
  }

  async postAction(){
    let {gid} = this._user;
    let data = this.get();

    data.uid = gid;

    console.log(data);

    try{
      let insertId = await this.modelInstance.add(data);
      return this.success({id: insertId});
    }catch(ex){
      return this.fail(1001, ex.message);
    }
  }
}