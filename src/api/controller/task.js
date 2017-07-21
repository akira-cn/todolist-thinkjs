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

  /**
   * 获取任务
   * @param {id} 如果传 id ，获取当前任务，否则获取当前用户任务列表
   */
  async getAction(){
    let {uid} = this._user;
    let id = this.id;

    if(!id){
      let result = await this.modelInstance.where({
        uid,
        type: {'<': 2}
      }).select();

      return this.success(result);
    }else{
      let result = await this.modelInstance.where({
        uid,
        id,
        type: {'<': 2}
      }).find();

      if(result.id){
        return this.success(result);
      }else{
        return this.fail(1404, 'task not found');
      }
    }
  }

  /**
   * 添加任务
   * 
   * @param  {String}  description 任务描述
   * catch() 用于捕获错误信息
   */
  async postAction(){
    let {uid} = this._user;
    let data = this.param();

    data.uid = uid;

    try{
      let insertId = await this.modelInstance.add(data);
      return this.success({id: insertId});
    }catch(ex){
      return this.fail(1500, ex.message);
    }
  }
}