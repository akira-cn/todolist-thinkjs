'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * login action
   * @return {Promise} []
   */
  async indexAction(){
  	await this.session('user', '');
  	return this.display();
  }

  githubloginAction(){
      return this.redirect(`/api/user?type=github&state=/home/index/index`);
  }

}