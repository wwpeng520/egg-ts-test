import * as Constants from '../constant';
import { Sequelize } from './db_manager';
import logger from "../common/Logger"
import { parseQueryKeyword } from "../common/Funcs";
import * as _ from 'lodash';
import moment = require("moment");

// let SequelizeBOOLEAN: any = Sequelize.BOOLEAN;
let SequelizeINTEGER: any = Sequelize.INTEGER;
let SequelizeFLOAT: any = Sequelize.FLOAT;
let SequelizeDATE: any = Sequelize.DATE;
// let SequelizeSTRING: any = Sequelize.STRING;
// let SequelizeTEXT: any = Sequelize.TEXT;
// let SequelizeJSONB: any = Sequelize.JSONB;
// let SequelizeENUM: any = Sequelize.ENUM;
// let SequelizeARRAY: any = Sequelize.ARRAY;

async function getListCursorData(req, res, model, queryOptions) {
    
    console.log(res)
    if (!model) {
        return {};
    }
    let orderBy = req.query.orderBy || '';
    logger.info("orderBy", orderBy)
    let query = req.query.query;
    let field = req.query.field;
    let lastCursor = req.query.lastCursor;
    let page: number = parseInt(req.query.page, 10) || 1;
    let pageSize: number = parseInt(req.query.pageSize, 10) || Constants.DEFAULT_SEARCH_PAGESIZE;
    if (pageSize > Constants.MAX_SEARCH_PAGESIZE) {
        pageSize = Constants.MAX_SEARCH_PAGESIZE;
    }

    if (query) {
        const filter = parseQueryKeyword(query);
        field = field || "@all";
        let searchArray: Array<string>;
        try {
            let config = model.getConfig();
            if ("searchableList" in config) {
                searchArray = config["searchableList"]
            } else {
                return {
                    page: 1,
                    pageSize: 30,
                    totalItems: 0,
                    data: []
                }
            }
        } catch (e) {
            return {
                page: 1,
                pageSize: 30,
                totalItems: 0,
                data: []
            }
        }
        if (!queryOptions["where"]) {
            queryOptions["where"] = {}
        }
        if (field === "@all") {
            let tmpArray = []
            for (let field of searchArray) {
                let tmp = {};
                tmp[field] = filter;

                tmpArray.push(tmp);
            }
            console.log("tmpArray", tmpArray);
            queryOptions["where"]["$or"] = tmpArray;
        } else {
            if (_.indexOf(searchArray, field) === -1) {
                return {
                    page: 1,
                    pageSize: 30,
                    totalItems: 0,
                    data: []
                }
            }
            queryOptions["where"][field] = filter;
        }
    }
    let countOptions = Object.assign({}, queryOptions);
    delete countOptions["attributes"];

    let totalItems = await model.count(countOptions);
    // let result;

    if (pageSize * (page - 1) > totalItems) {
        // result = [];
    } else {
        if (lastCursor) {
            if (lastCursor !== "-1" || lastCursor !== "@null") {
                let field, isDesc;
                if (!orderBy) {
                    field = "id"
                } else {
                    field = orderBy.trim();
                }
                if (field[0] === "+") {
                    field = field.substring(1);
                    isDesc = false
                } else if (field[0] === "-") {
                    field = field.substring(1);
                    isDesc = true;
                } else {
                    isDesc = false;
                }
                let attr = model["rawAttributes"][field];
                if (!attr) {
                    return {
                        // result: false,
                        message: "Wrong orderBy",
                    }
                }
                let typeData: any = attr.type;

                if (typeData instanceof SequelizeDATE) {
                    lastCursor = moment(lastCursor)
                } else if (typeData instanceof SequelizeINTEGER) {
                    lastCursor = parseInt(lastCursor)
                } else if (typeData instanceof SequelizeFLOAT) {
                    lastCursor = parseFloat(lastCursor)
                }
                console.log("lastCursor", lastCursor)
                if (!queryOptions["where"]) {
                    queryOptions["where"] = {}
                }
                if (isDesc) {
                    if (queryOptions["where"][field] && queryOptions["where"][field]["$lt"]) {
                        let tmp = queryOptions["where"][field]["$lt"];
                        if (tmp > lastCursor) {
                            queryOptions["where"][field]["$lt"] = lastCursor
                        }
                    } else {
                        queryOptions["where"][field] = {
                            $lt: lastCursor
                        };
                    }
                } else {
                    if (queryOptions["where"][field] && queryOptions["where"][field]["$gt"]) {
                        let tmp = queryOptions["where"][field]["$gt"];
                        if (tmp < lastCursor) {
                            queryOptions["where"][field]["$gt"] = lastCursor
                        }
                    } else {
                        queryOptions["where"][field] = {
                            $gt: lastCursor
                        };
                    }
                }
            }
        } else {
            queryOptions["offset"] = pageSize * (page - 1);
        }
        queryOptions["limit"] = pageSize;
        if (!queryOptions["order"]) {
            if (orderBy) {
                orderBy = orderBy.trim()
                if (orderBy[0] === "+") {
                    orderBy = `"${orderBy.substring(1)}"`;
                } else if (orderBy[0] === "-") {
                    orderBy = `"${orderBy.substring(1)}" DESC`;
                } else {
                    orderBy = `"${orderBy}"`;
                }
                queryOptions["order"] = orderBy;
            } else {
                queryOptions["order"] = `"id"`;
            }
        }
        queryOptions.raw = true;
        // result = await model.findAll(queryOptions);
    }

    return {
        page: page,
        pageSize: pageSize,
        totalItems: totalItems,
        // data: _.map(result, topic => attachGroupedNews(topic)),
    };
}

function getBundleVersion(req: any) {
    let bundleVersion = req.get('BundleVersion');
    if (bundleVersion) {
        return bundleVersion;
    } else {
        return "1.0.0";
    }
};

export { getListCursorData, getBundleVersion }
