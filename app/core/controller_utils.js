"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants = require("../constant");
const db_manager_1 = require("./db_manager");
const Logger_1 = require("../common/Logger");
const Funcs_1 = require("../common/Funcs");
const _ = require("lodash");
const moment = require("moment");
// let SequelizeBOOLEAN: any = Sequelize.BOOLEAN;
let SequelizeINTEGER = db_manager_1.Sequelize.INTEGER;
let SequelizeFLOAT = db_manager_1.Sequelize.FLOAT;
let SequelizeDATE = db_manager_1.Sequelize.DATE;
// let SequelizeSTRING: any = Sequelize.STRING;
// let SequelizeTEXT: any = Sequelize.TEXT;
// let SequelizeJSONB: any = Sequelize.JSONB;
// let SequelizeENUM: any = Sequelize.ENUM;
// let SequelizeARRAY: any = Sequelize.ARRAY;
async function getListCursorData(req, res, model, queryOptions) {
    console.log(res);
    if (!model) {
        return {};
    }
    let orderBy = req.query.orderBy || '';
    Logger_1.default.info("orderBy", orderBy);
    let query = req.query.query;
    let field = req.query.field;
    let lastCursor = req.query.lastCursor;
    let page = parseInt(req.query.page, 10) || 1;
    let pageSize = parseInt(req.query.pageSize, 10) || Constants.DEFAULT_SEARCH_PAGESIZE;
    if (pageSize > Constants.MAX_SEARCH_PAGESIZE) {
        pageSize = Constants.MAX_SEARCH_PAGESIZE;
    }
    if (query) {
        const filter = Funcs_1.parseQueryKeyword(query);
        field = field || "@all";
        let searchArray;
        try {
            let config = model.getConfig();
            if ("searchableList" in config) {
                searchArray = config["searchableList"];
            }
            else {
                return {
                    page: 1,
                    pageSize: 30,
                    totalItems: 0,
                    data: []
                };
            }
        }
        catch (e) {
            return {
                page: 1,
                pageSize: 30,
                totalItems: 0,
                data: []
            };
        }
        if (!queryOptions["where"]) {
            queryOptions["where"] = {};
        }
        if (field === "@all") {
            let tmpArray = [];
            for (let field of searchArray) {
                let tmp = {};
                tmp[field] = filter;
                tmpArray.push(tmp);
            }
            console.log("tmpArray", tmpArray);
            queryOptions["where"]["$or"] = tmpArray;
        }
        else {
            if (_.indexOf(searchArray, field) === -1) {
                return {
                    page: 1,
                    pageSize: 30,
                    totalItems: 0,
                    data: []
                };
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
    }
    else {
        if (lastCursor) {
            if (lastCursor !== "-1" || lastCursor !== "@null") {
                let field, isDesc;
                if (!orderBy) {
                    field = "id";
                }
                else {
                    field = orderBy.trim();
                }
                if (field[0] === "+") {
                    field = field.substring(1);
                    isDesc = false;
                }
                else if (field[0] === "-") {
                    field = field.substring(1);
                    isDesc = true;
                }
                else {
                    isDesc = false;
                }
                let attr = model["rawAttributes"][field];
                if (!attr) {
                    return {
                        // result: false,
                        message: "Wrong orderBy",
                    };
                }
                let typeData = attr.type;
                if (typeData instanceof SequelizeDATE) {
                    lastCursor = moment(lastCursor);
                }
                else if (typeData instanceof SequelizeINTEGER) {
                    lastCursor = parseInt(lastCursor);
                }
                else if (typeData instanceof SequelizeFLOAT) {
                    lastCursor = parseFloat(lastCursor);
                }
                console.log("lastCursor", lastCursor);
                if (!queryOptions["where"]) {
                    queryOptions["where"] = {};
                }
                if (isDesc) {
                    if (queryOptions["where"][field] && queryOptions["where"][field]["$lt"]) {
                        let tmp = queryOptions["where"][field]["$lt"];
                        if (tmp > lastCursor) {
                            queryOptions["where"][field]["$lt"] = lastCursor;
                        }
                    }
                    else {
                        queryOptions["where"][field] = {
                            $lt: lastCursor
                        };
                    }
                }
                else {
                    if (queryOptions["where"][field] && queryOptions["where"][field]["$gt"]) {
                        let tmp = queryOptions["where"][field]["$gt"];
                        if (tmp < lastCursor) {
                            queryOptions["where"][field]["$gt"] = lastCursor;
                        }
                    }
                    else {
                        queryOptions["where"][field] = {
                            $gt: lastCursor
                        };
                    }
                }
            }
        }
        else {
            queryOptions["offset"] = pageSize * (page - 1);
        }
        queryOptions["limit"] = pageSize;
        if (!queryOptions["order"]) {
            if (orderBy) {
                orderBy = orderBy.trim();
                if (orderBy[0] === "+") {
                    orderBy = `"${orderBy.substring(1)}"`;
                }
                else if (orderBy[0] === "-") {
                    orderBy = `"${orderBy.substring(1)}" DESC`;
                }
                else {
                    orderBy = `"${orderBy}"`;
                }
                queryOptions["order"] = orderBy;
            }
            else {
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
    };
}
exports.getListCursorData = getListCursorData;
function getBundleVersion(req) {
    let bundleVersion = req.get('BundleVersion');
    if (bundleVersion) {
        return bundleVersion;
    }
    else {
        return "1.0.0";
    }
}
exports.getBundleVersion = getBundleVersion;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcl91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFDekMsNkNBQXlDO0FBQ3pDLDZDQUFxQztBQUNyQywyQ0FBb0Q7QUFDcEQsNEJBQTRCO0FBQzVCLGlDQUFrQztBQUVsQyxpREFBaUQ7QUFDakQsSUFBSSxnQkFBZ0IsR0FBUSxzQkFBUyxDQUFDLE9BQU8sQ0FBQztBQUM5QyxJQUFJLGNBQWMsR0FBUSxzQkFBUyxDQUFDLEtBQUssQ0FBQztBQUMxQyxJQUFJLGFBQWEsR0FBUSxzQkFBUyxDQUFDLElBQUksQ0FBQztBQUN4QywrQ0FBK0M7QUFDL0MsMkNBQTJDO0FBQzNDLDZDQUE2QztBQUM3QywyQ0FBMkM7QUFDM0MsNkNBQTZDO0FBRTdDLEtBQUssNEJBQTRCLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVk7SUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxnQkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDL0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDNUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDNUIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdEMsSUFBSSxJQUFJLEdBQVcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFF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