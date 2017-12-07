"use strict";
// import { Context } from 'egg';
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../common/Logger");
const Sequelize = require("sequelize");
exports.Sequelize = Sequelize;
// import * as config from "config";
const fs = require("fs-extra");
const path = require("path");
const sequelize = this.app.config.sequelize;
exports.sequelize = sequelize;
class DBManager {
    registerCollections() {
        let modelPath = path.join(__dirname, "../model");
        for (let filename of fs.readdirSync(modelPath)) {
            if (!filename.endsWith(".d.js")) {
                let filepath = path.join(modelPath, filename);
                try {
                    require(filepath);
                }
                catch (e) {
                    Logger_1.default.error("import model error", filepath, e);
                }
            }
        }
    }
    dbConnect() {
        return new Promise((resolve, reject) => {
            sequelize.
                sync({ force: false }).then(() => {
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }
    ;
}
exports.DBManager = DBManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJfbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRiX21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFpQzs7QUFFakMsNkNBQXFDO0FBQ3JDLHVDQUF1QztBQW1DUiw4QkFBUztBQWxDeEMsb0NBQW9DO0FBQ3BDLCtCQUFnQztBQUNoQyw2QkFBOEI7QUFFOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBOEJ4Qiw4QkFBUztBQTVCN0I7SUFDVyxtQkFBbUI7UUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQztvQkFDRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVCxnQkFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2xELENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTSxTQUFTO1FBQ1osTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLFNBQVM7Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQSxDQUFDO0NBRUw7QUFFUSw4QkFBUyJ9