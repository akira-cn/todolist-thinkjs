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
}