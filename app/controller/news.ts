import { Controller, Context} from 'egg';

export default class NewsController extends Controller {
    constructor(ctx: Context) {
        super(ctx);
    }
    
    async list() {
        const { ctx } = this;
        // const last_id = parseInt(ctx.params.last_id) || -1;
        // const news = await ctx.service.news.list(last_id);
        ctx.logger.info('#####    appInfo.name');
        ctx.logger.debug(ctx.app.config.name);
        ctx.logger.debug(ctx.app.config.keys);
        ctx.body = 'news';
    }
}
