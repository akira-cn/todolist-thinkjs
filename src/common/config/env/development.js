'use strict';

export default {
  login: {
    type: 'github',
    adapter: {
      github: {
        client_id: '9abd8874b4d78632013c',  
        client_secret: '89985c67a72cea03624261a699f48fdd3a3bff7e',
        redirect_uri: 'http://localhost:8360/api/user?type=github'  
      }  
    }    
  },
  db: {
    type: 'mysql',
    adapter: {
      mysql: {
        host: '127.0.0.1',
        port: '3306',
        database: 'todolist',
        user: 'root',
        password: 'root',
        prefix: 'tdl_',
        encoding: 'utf8mb4'
      }
    }
  }
};
