"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function parseQueryKeyword(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) {
        return null;
    }
    let keywords = keyword.split(" ");
    keywords = _.compact(keywords);
    keywords = _.uniq(keywords);
    if (keywords.length === 0) {
        return null;
    }
    if (keywords.length === 1) {
        return {
            $ilike: `%${keywords[0]}%`,
        };
    }
    return {
        $ilike: {
            $all: keywords.map((w) => `%${w}%`),
        },
    };
}
exports.parseQueryKeyword = parseQueryKeyword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUE2QjtBQUU3QiwyQkFBMkIsVUFBa0IsRUFBRTtJQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDO1lBQ0wsTUFBTSxFQUFFLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQzNCLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTSxDQUFDO1FBQ0wsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDcEM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUdDLDhDQUFpQiJ9