'use strict';

export default class extends think.controller.base {
  async __before(){
    let user = await this.session('user');

    if(!user){
      return this.redirect(`/api/user?type=github&state=${this.http.url}`);
    }else{
      this._user = user;
    }
  }
}