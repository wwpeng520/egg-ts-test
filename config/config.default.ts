'use strict';
import * as Sequelize from "sequelize";

module.exports = appInfo => {
  // appInfo: pkg(package.json); name(应用名，同 pkg.name); baseDir(应用代码的目录); HOME(用户目录，如 admin 账户为 /home/admin); root(应用根目录，只有在 local 和 unittest 环境下为 baseDir，其他都为 HOME)

  const config: any = {};

  config.keys = appInfo.name + '_1503476888723_7809';

  config.middleware = [  ];
  
  config.security = {
    csrf: {
      enable: false,
    },
  };
  
  // config.sequelize = {
  //   dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
  //   database: 'MeiJuKa',
  //   host: '127.0.0.1',
  //   port: '5431',
  //   username: 'MeiJuKa',
  //   password: 'kWNAWjPbI0Xk6emamfRIn41KYUcQUA4g',
  // };

  config.sequelize = new Sequelize('MeiJuKa', 'MeiJuKa', 'kWNAWjPbI0Xk6emamfRIn41KYUcQUA4g', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5431,
    logging: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  return config;
};
