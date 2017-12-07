"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class NewsController extends egg_1.Controller {
    constructor(ctx) {
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
exports.default = NewsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBeUM7QUFFekMsb0JBQW9DLFNBQVEsZ0JBQVU7SUFDbEQsWUFBWSxHQUFZO1FBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNOLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsc0RBQXNEO1FBQ3RELHFEQUFxRDtRQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQWRELGlDQWNDIn0=