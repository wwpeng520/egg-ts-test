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
        const top12 = await ctx.service.tvseason.list();
        ctx.body = top12;
    }
}
exports.default = TVSeasonController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUEwQztBQUMxQywrQ0FBK0M7QUFDL0MsdUVBQXVFO0FBRXZFLHdCQUF3QyxTQUFRLGdCQUFVO0lBQ3hELFlBQVksR0FBWTtRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQU1GO0FBZkQscUNBZUMifQ==