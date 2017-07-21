'use strict';

/**
 * login config
 */
export default {
  type: 'github',
  adapter: {
    github: {
      client_id: '9abd8874b4d78632013c',  //github client id
      client_secret: '89985c67a72cea03624261a699f48fdd3a3bff7e',//github client secret
      redirect_uri: 'http://localhost:8360/api/user?type=github'  //github redirect uri xxx.com/api/user
    }  
  }
}
