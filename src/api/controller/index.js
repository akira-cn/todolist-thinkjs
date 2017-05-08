'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let githubService = this.service('auth/github');
    //auto render template file index_index.html
    return this.success();
  }
}