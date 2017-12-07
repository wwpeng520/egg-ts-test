"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Tvseason extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    async list() {
        const result = await this.app.model.Tvseason.findAll({
            limit: 12
        });
        return result;
    }
}
exports.default = Tvseason;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUF1QztBQUV2QyxjQUE4QixTQUFRLGFBQU87SUFDekMsWUFBWSxHQUFZO1FBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNuRCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUE7SUFDZixDQUFDO0NBRUo7QUFaRCwyQkFZQyJ9