import * as winston from "winston";
// import * as config from "config";
// const Sentry = require('winston-sentry');

export default  new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    // new Sentry({
    //     level: 'error',
    //     dsn: config.get<String>("sentry.dsn")
    // })
  ]
});
