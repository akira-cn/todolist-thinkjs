import querystring from 'querystring';
import request from 'request-promise';  //request-promise模块在thinkjs中未找到，是否改成request？

const GITHUB_AUTH_URL = 'https://github.com/login/oauth';
const GITHUB_API_URL = 'https://api.github.com';

const defaultConf = think.config('login.adapter').github || {};

export default class extends think.service.base {
  constructor(config = defaultConf) {
    super();

    let {client_id, client_secret, redirect_uri} = config;
    if( !client_id || !client_secret || !redirect_uri ) {
      throw Error('client_id, client_secret, redirect_uri is required');
    }

    Object.assign(this, config);
    if( !this.scope ) { this.scope = 'user'; }
  }

  /**
   * pack authorize url
   */
  getAuthorizeUrl(state) {
    let params = querystring.stringify({
      client_id: this.client_id,
      redirect_uri: this.redirect_uri,
      scope: this.scope,
      state: state
    });
    return `${GITHUB_AUTH_URL}/authorize?${params}`;
  }

  /**
   * get access token
   */
  getAccessToken(state, code) {
    let data = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      redirect_uri: this.redirect_uri,
      code,
      state
    };

    return request.post({
      url: `${GITHUB_AUTH_URL}/access_token`,
      headers: { 'Accept': 'application/json' },
      form: data,
      json: true
    });
  }

  /**
   * get user info
   */
  async getUserInfo(http) {
    let {state, code} = http.get();
    state = state || '';

    if( !code ) {
      return http.redirect(this.getAuthorizeUrl(state));
    }

    try{
      let res = await this.getAccessToken(state, code);

      return request.get({
        url: `${GITHUB_API_URL}/user`,
        headers: {
          'User-Agent': 'via harpers',
          'Authorization': `token ${res.access_token}`
        },
        json: true
      });      
    }catch(ex){
      console.log(ex);  //检测try内部是否发生异常，发生异常则抛出错误
    }
  }

  // /**
  //  * sign up user
  //  */
  // async signUp(req) {
  //   let userInfo = await this.getUserInfo(req);
  //   let user = {
  //     name: userInfo.login,
  //     nickname: userInfo.name,
  //     email: userInfo.email,
  //     github: userInfo.login
  //   };
  //   let res = await req.model('user').addUser(user, req.ip());
  //   return res.id;
  // }

  // /**
  //  * login
  //  */
  // async signIn(req) {
  //   let user = await this.getUserInfo(req);
  //   user = await req.model('user').where({name: user.login, email: user.email}).find();
  //   return user;
  // }
}