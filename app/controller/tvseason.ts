import { Context, Controller } from 'egg';
// import {ITVSeason} from '../model/tvseason';
// import BaseRestController = require('../core/base_rest_controller');

export default class TVSeasonController extends Controller {
  constructor(ctx: Context) {
    super(ctx);
  }

  async getTop12() {
    const { ctx } = this;
    const top12 = await ctx.service.tvseason.list();
    ctx.body = top12;
  }

  // public Register(app: Application) {
  //   app.get('/tvseasons/top12', this.handleError(this.getTop12.bind(this))); // 首页热门美剧显示数量8-12个
  // }

}
