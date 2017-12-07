"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Tvseason extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    async list() {
        let result;
        result = await this.app.model.Tvseason.findAll({
            attributes: ["id", "showName", "country", "genres", "year", "runtime", "doubanScore", "summary", "createdAt"],
            limit: 12
        });
        return result;
    }
}
exports.default = Tvseason;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUF1QztBQUd2QyxjQUE4QixTQUFRLGFBQU87SUFDM0MsWUFBWSxHQUFZO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksTUFBMkIsQ0FBQztRQUNoQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1lBQzdHLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQTtJQUNmLENBQUM7Q0FFRjtBQWRELDJCQWNDIn0=