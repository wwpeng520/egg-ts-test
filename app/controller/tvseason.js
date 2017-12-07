"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
// import {ITVSeason} from '../model/tvseason';
// import BaseRestController = require('../core/base_rest_controller');
class TVSeasonController extends egg_1.Controller {
    constructor(ctx) {
        super(ctx);
    }
    async getTop12() {
        const { ctx } = this;
        const top12 = await ctx.service.tvseason.top12();
        ctx.body = top12;
    }
    async getById() {
        const { ctx } = this;
        const id = ctx.params.id;
        ctx.logger.info('TV season id: ', id);
        const result = await ctx.service.tvseason.getById(id);
        ctx.body = result;
    }
}
exports.default = TVSeasonController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUEwQztBQUMxQywrQ0FBK0M7QUFDL0MsdUVBQXVFO0FBRXZFLHdCQUF3QyxTQUFRLGdCQUFVO0lBQ3hELFlBQVksR0FBWTtRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBTUY7QUF2QkQscUNBdUJDIn0=