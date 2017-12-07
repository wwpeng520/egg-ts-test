"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
// import * as config from "config";
// const Sentry = require('winston-sentry');
exports.default = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)(),
    ]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQyw0Q0FBNEM7QUFFNUMsa0JBQWdCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxLQUFLLEVBQUUsTUFBTTtJQUNiLFVBQVUsRUFBRTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBS25DO0NBQ0YsQ0FBQyxDQUFDIn0=