'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
   let loginedUserTemp = this._user;
   this.assign({loginedUser: loginedUserTemp});
   return this.display();
  }

  /**
 * 更新task的type
 * @return 
 */
 async updateAction(){
    let type = parseInt(this.post('type')),id=parseInt(this.post('id'));
    let model = this.model('task');
    let affectedRows;
    // console.log(type,id);
    if(type == 0){
      affectedRows = await model.where({id: id}).update({type: 1});
    };
    if(type == 1){
      affectedRows = await model.where({id: id}).update({type: 0});
    };
    // console.log(affectedRows);
    if(affectedRows){
      return this.success(affectedRows);
    }else{
      return this.fail(1405, '未选中update项');
    };
  }

/**
 * 删除指定id的数据
 * @param  id
 */
  async deleteAction(){
    let id=parseInt(this.post('id'));
    // console.log(id);
    let model = this.model('task');
    let affectedRows = await model.where({id: id}).delete();
    if(affectedRows){
      return this.success(affectedRows);
    }else{
      return this.fail(1406, '未选中删除项');
    };
  }

}


