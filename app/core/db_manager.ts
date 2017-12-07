// import { Context } from 'egg';

import logger from "../common/Logger"
import * as Sequelize from "sequelize";
// import * as config from "config";
import fs = require('fs-extra');
import path = require('path');

const sequelize = this.app.config.sequelize;

class DBManager {
    public registerCollections() {
        let modelPath = path.join(__dirname, "../model");
        for (let filename of fs.readdirSync(modelPath)) {
            if (!filename.endsWith(".d.js")) {
                let filepath = path.join(modelPath, filename);
                try {
                    require(filepath);
                } catch (e) {
                    logger.error("import model error", filepath,e)
                }
            }
        }
    }

    public dbConnect(): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            sequelize.
                sync({ force: false }).then(() => {
                    resolve(true);
                }).catch(err => {
                    reject(err);
                });
        });
    };

}

export { DBManager, sequelize, Sequelize };
