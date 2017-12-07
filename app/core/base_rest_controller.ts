import { Application, Response } from 'egg';
const BaseController = require('./base_controller');
import logger from '../common/Logger';
import { Sequelize } from './db_manager';
import { getListCursorData } from './controller_utils';
import * as _ from 'lodash';

abstract class BaseRestController extends BaseController {
  allowFileds: string[];
  protected Model: Sequelize.Model<any, any>;

  constructor(model: any) {
    super();
    this.Model = model;
    this.allowFileds = [];
    _.each(model.rawAttributes, (attr, attrName) => {
      console.log(attr)
      this.allowFileds.push(attrName.toString());
    });
  }

  abstract Register(app: Application);

  public getResouce(req: any) {
    return req.resource;
  }

  public getUserId(req: any) {
    return req.user.id;
  }

  public async objectById(req: any, res: Response, next: any, id: string) {
    const idInt: number = parseInt(id, 10);
    if (idInt) {
      const resource = await this.Model.findById(idInt);
      if (resource) {
        req.resource = resource;
        return next();
      }
    }
    return this.returnNotFound(res);
  }

  public async query() {
    const { ctx } = this;
    let query;
    try {
      query = JSON.parse(ctx.request.query);
    } catch (e) {
      query = {};
    }
    query.userId = this.getUserId(ctx.request);
    let limit = null;
    if (ctx.request.limit) {
      limit = parseInt(ctx.request.limit, 10);
    }

    let result;
    if (limit === null) {
      result = await this.Model.findAll({ where: query });
    } else {
      if (limit === 1) {
        result = await this.Model.findOne({ where: query });
      } else if (limit > 1) {
        result = await this.Model.findAll({ where: query, limit });
      }
    }
    this.returnData(ctx.response, result);
  }

  public async count() {
    const { ctx } = this;
    let query;
    try {
      query = JSON.parse(ctx.request.query);
    } catch (e) {
      return this.returnData(ctx.response, { count: 0 });
    }
    query.userId = this.getUserId(ctx.request);
    try {
      const result = await this.Model.count({ where: query });
      this.returnData(ctx.response, { count: result });
    } catch (e) {
      return this.returnData(ctx.response, { count: 0 });
    }
  }

  public create = async (req: any, res: Response) => {
    logger.info('body', req.body);
    try {
      let resouceCreated;
      if (req.fixbody) {
        resouceCreated = await this.Model.create(req.fixbody);
      } else {
        resouceCreated = await this.Model.create(req.body);
      }
      return this.returnCreated(res, resouceCreated);
    } catch (e) {
      return this.returnServerError(res, e);
    }
  }

  public list = async (req: any, res: Response) => {
    const result = await getListCursorData(req, res, this.Model, {});
    this.returnData(res, result);
  }

  public async read(req: any, res: Response) {
    return this.returnData(res, this.getResouce(req));
  }

  public delete = async (req: any, res: Response) => {
    try {
      await this.Model.destroy({
        where: {
          id: this.getResouce(req).id
        },
      });
      return this.returnData(res, { result: true });
    } catch (e) {
      return this.returnServerError(res, e);
    }
  }

  public patch = async (req: any, res: Response) => {
    logger.info('body', req.body);
    try {
      const id = this.getResouce(req).id;
      await this.Model.update(req.body, { where: { id } });
      return this.returnData(res, { result: true });
    } catch (e) {
      return this.returnServerError(res, e);
    }
  }

}

export = BaseRestController;
