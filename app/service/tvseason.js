"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Tvseason extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    async top12() {
        let result;
        result = await this.app.model.Tvseason.findAll({
            attributes: ["id", "showName", "country", "genres", "year", "runtime", "doubanScore", "summary", "createdAt"],
            limit: 12
        });
        return result;
    }
    async getById(id) {
        let result;
        result = await this.app.model.Tvseason.findAll({
            where: {
                id: id
            },
            attributes: ["id", "showName", "country", "genres", "year", "runtime", "doubanScore", "summary", "createdAt"],
        });
        return result;
    }
}
exports.default = Tvseason;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHZzZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dnNlYXNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUF1QztBQUd2QyxjQUE4QixTQUFRLGFBQU87SUFDM0MsWUFBWSxHQUFZO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULElBQUksTUFBMkIsQ0FBQztRQUNoQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1lBQzdHLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDZCxJQUFJLE1BQTJCLENBQUM7UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLEVBQUU7YUFDUDtZQUNELFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1NBQzlHLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUE7SUFDZixDQUFDO0NBRUY7QUF6QkQsMkJBeUJDIn0=