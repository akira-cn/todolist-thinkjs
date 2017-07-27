'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * login action
   * @return {Promise} []
   */
  indexAction(){
  	return this.display();
  }
}