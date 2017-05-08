'use strict';

import Base from './base.js';

/**
 * rest controller
 * @type {Class}
 */
export default class extends Base {
  async indexAction(){
    let {type, state} = this.get();

    if(type === 'github'){
      let GithubService = this.service('auth/github');
      let gs = new GithubService();

      let result = await gs.getUserInfo(this.http);

      if(!result) return;

      let userInfo = {
        gid: `github_${result.id}`,
        name: result.login,
        nickname: result.name,
        type: 0,
        email: result.email
      };
      
      await this.session('user', userInfo);

      let userModel = this.model('user');

      await userModel.thenAdd(
        userInfo, {gid: userInfo.gid}
      );

      if(state){
        return this.redirect(state);
      }
      return this.success(userInfo);
    }else{
      this.status(405);
      return this.fail(405, 'method not allowed');
    }
  }
}