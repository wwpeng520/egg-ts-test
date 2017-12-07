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
        let result = await this.app.model.TVSeason.findAll({
            limit: 12
        });
        ctx.body = this.returnData(ctx.response.body, result);
    }
}
exports.default = TVSeasonController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUErQztBQUMvQyxtRUFBb0U7QUFFcEUsd0JBQXdDLFNBQVEsa0JBQWtCO0lBQ2hFLFlBQVksR0FBWTtRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBTUY7QUFqQkQscUNBaUJDIn0=