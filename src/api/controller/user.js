'use strict';

import Base from './base.js';

/**
 * rest controller
 * @type {Class}
 */
export default class extends Base {
  async logoutAction(){
    await this.session('user', '');
    return this.success();
  }

  /*
   * 用户登录
   * @param  {String}  type  登录方式
   * @param  {String}  state 登录后跳转地址
   */
  async indexAction(){
    let {type, state} = this.get();  //如何实现跳转？

    if(type === 'github'){  
      //github 登录并获取用户信息

      let GithubService = this.service('auth/github');
      let gs = new GithubService();

      let result = await gs.getUserInfo(this.http);

      if(!result) return; //如果没有登录成功，跳转到github授权

      //拿到用户信息
      let userInfo = {
        gid: `github_${result.id}`,
        name: result.login,
        nickname: result.name,
        type: 0,
        email: result.email
      };

      let userModel = this.model('user');

      //将信息添加到 user 表，一个 gid 只能添加一条记录
      result = await userModel.thenAdd(
        userInfo, {gid: userInfo.gid}
      );

      //将表的 id 作为 userInfo 的 uid
      userInfo.uid = result.id;
      
      //写入 session
      await this.session('user', userInfo);
      // console.log(userInfo);

      if(state){
        //有跳转 url，跳转
        return this.redirect(state);
      }
      
      //否则成功返回用户信息
      return this.success(userInfo);
    }else{
      this.status(405);
      return this.fail(405, 'method not allowed');
    }
  }
}