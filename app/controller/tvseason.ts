import { Context, Controller } from 'egg';
// import {ITVSeason} from '../model/tvseason';
// import BaseRestController = require('../core/base_rest_controller');

export default class TVSeasonController extends Controller {
  constructor(ctx: Context) {
    super(ctx);
  }

  async getTop12() {
    const { ctx } = this;
    const top12 = await ctx.service.tvseason.top12();
    ctx.body = top12;
  }

  async getById() {
    const { ctx } = this;
    const id = ctx.params.id
    ctx.logger.info('TV season id: ', id);
    const result = await ctx.service.tvseason.getById(id);
    ctx.body = result;
  }

  // public Register(app: Application) {
  //   app.get('/tvseasons/top12', this.handleError(this.getTop12.bind(this))); // 首页热门美剧显示数量8-12个
  // }

}
