'use strict';

export default class extends think.controller.rest {

  constructor(...args) {
    super(...args);
    this._method = '_method';
  }

  async __before() {
    let user = await this.session('user');

    if(!user){
      this.status(401); //未授权
      this.fail(401.1, 'need authorization')
    }else{
      this._user = user;
    }    
  }
}