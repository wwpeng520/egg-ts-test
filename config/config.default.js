'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
module.exports = appInfo => {
    // appInfo: pkg(package.json); name(应用名，同 pkg.name); baseDir(应用代码的目录); HOME(用户目录，如 admin 账户为 /home/admin); root(应用根目录，只有在 local 和 unittest 环境下为 baseDir，其他都为 HOME)
    const config = {};
    config.keys = appInfo.name + '_1503476888723_7809';
    config.middleware = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsdUNBQXVDO0FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUU7SUFDekIsa0tBQWtLO0lBRWxLLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUV2QixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFFbkQsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFJLENBQUM7SUFFekIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNoQixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSztTQUNkO0tBQ0YsQ0FBQztJQUVGLHVCQUF1QjtJQUN2QixxRUFBcUU7SUFDckUseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtEQUFrRDtJQUNsRCxLQUFLO0lBRUwsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFrQyxFQUFFO1FBQ3pGLElBQUksRUFBRSxXQUFXO1FBQ2pCLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsS0FBSztTQUNaO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==