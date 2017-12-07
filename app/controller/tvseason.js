"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {ITVSeason} from '../model/tvseason';
const BaseRestController = require("../core/base_rest_controller");
class TVSeasonController extends BaseRestController {
    constructor(ctx) {
        super(ctx);
    }
    async getTop12() {
        const { ctx } = this;
        const top12 = await ctx.service.tvseason.list();
        ctx.body = this.returnData(ctx.response.body, top12);
    }
    Register(app) {
        app.get('/tvseasons/top12', this.handleError(this.getTop12.bind(this))); // 首页热门美剧显示数量8-12个
    }
}
exports.default = TVSeasonController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUErQztBQUMvQyxtRUFBb0U7QUFFcEUsd0JBQXdDLFNBQVEsa0JBQWtCO0lBQ2hFLFlBQVksR0FBWTtRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxRQUFRLENBQUMsR0FBZ0I7UUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtJQUM3RixDQUFDO0NBRUY7QUFmRCxxQ0FlQyJ9