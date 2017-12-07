import { Application, Context } from 'egg';
// import {ITVSeason} from '../model/tvseason';
import BaseRestController = require('../core/base_rest_controller');

export default class TVSeasonController extends BaseRestController {
  constructor(ctx: Context) {
    super(ctx);
  }

  async getTop12() {
    const { ctx } = this;
    let result = await this.app.model.TVSeason.findAll({
      limit: 12
    });
    ctx.body = this.returnData(ctx.response.body, result);
  }

  public Register(app: Application) {
    app.get('/tvseasons/top12', this.handleError(this.getTop12.bind(this))); // 首页热门美剧显示数量8-12个
  }

}
