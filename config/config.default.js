'use strict';
// import * as Sequelize from "sequelize";
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
    config.sequelize = {
        dialect: 'postgres',
        database: 'MeiJuKa',
        host: '127.0.0.1',
        port: '5431',
        username: 'MeiJuKa',
        password: 'kWNAWjPbI0Xk6emamfRIn41KYUcQUA4g',
    };
    // config.sequelize = new Sequelize('MeiJuKa', 'MeiJuKa', 'kWNAWjPbI0Xk6emamfRIn41KYUcQUA4g', {
    //   host: '127.0.0.1',
    //   dialect: 'postgres',
    //   port: 5431,
    //   logging: true,
    //   pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    //   }
    // });
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYiwwQ0FBMEM7QUFFMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsRUFBRTtJQUN6QixrS0FBa0s7SUFFbEssTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO0lBRXZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUVuRCxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUksQ0FBQztJQUV6QixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ2hCLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7S0FDRixDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUNqQixPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxrQ0FBa0M7S0FDN0MsQ0FBQztJQUVGLCtGQUErRjtJQUMvRix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sTUFBTTtJQUVOLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIn0=