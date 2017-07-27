'use strict';

export default class extends think.controller.base {
  async __before(){
    //如果没有用户信息，跳转去登录
    let user = await this.session('user');

    if(!user){
      return this.redirect(`/api/user?type=github&state=${this.http.url}`);
    }else{
      this._user = user;
    }
    // this.assign({'loginUrl': '/api/user?type=github&state=${this.http.url}'})
    // this._user = user;
    
    let task = await this.session('task');
    console.log(task);

  }
}