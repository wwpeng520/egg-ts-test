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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvY29uZmlnLmRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLHVDQUF1QztBQUV2QyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQ3pCLGtLQUFrSztJQUVsSyxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFFdkIsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBSSxDQUFDO0lBRXpCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUs7U0FDZDtLQUNGLENBQUM7SUFFRix1QkFBdUI7SUFDdkIscUVBQXFFO0lBQ3JFLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrREFBa0Q7SUFDbEQsS0FBSztJQUVMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBa0MsRUFBRTtRQUN6RixJQUFJLEVBQUUsV0FBVztRQUNqQixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIn0=