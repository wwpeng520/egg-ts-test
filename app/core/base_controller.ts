import { Response, Controller } from 'egg';
// const Controller = require('egg').Controller;
import CError = require("../common/CError");
import * as Constants from "../constant";

class BaseController extends Controller {
  // abstract Register(app: Application);
  
  returnCreated(res: Response, data) {
    const { ctx } = this;
    // 设置响应内容和响应状态码
    ctx.status = 201;
    ctx.body = res.set(data);
  }

  public returnData(res: Response, data) {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = res.set(data);
  }

  returnBadRequest(res: Response, err: CError) {
    const { ctx } = this;
    ctx.status = 400;
    ctx.body = res;
    ctx.throw(404, err);
  }

  returnNotAllowed(res: Response) {
    const { ctx } = this;
    ctx.status = 405;
    ctx.body = res;
    ctx.throw(405, new CError(Constants.ErrorCodes.System.NotAllowed));
  }

  returnNotFound(res: Response) {
    const { ctx } = this;
    ctx.status = 404;
    ctx.body = res;
    ctx.throw(404, new CError(Constants.ErrorCodes.System.NotFound));
  }

  returnUnAuthenticated(res: Response) {
    const { ctx } = this;
    ctx.status = 401;
    ctx.body = res;
    ctx.throw(401, new CError(Constants.ErrorCodes.System.UnAuthenticated));
  }

  returnServerError(res: Response, err: CError) {
    const { ctx } = this;
    ctx.status = 500;
    ctx.body = res;
    ctx.throw(500, CError.clone(err));
  }

  returnValidationErrors(res: Response, err: any) {
    const { ctx } = this;
    ctx.status = 400;
    ctx.body = res;
    ctx.throw(400, CError.clone(err));
  }

  checkValidationErrors(req: any, res: Response, next: any) {
    let errors = req.validationErrors();
    if (errors) {
        this.returnValidationErrors(res, errors);
    } else {
        next();
    }
  }

  handleError = fn => (...args) => fn(...args).catch(args[2])

}

module.exports = BaseController;
