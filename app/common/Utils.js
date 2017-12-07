"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function isProduction() {
    if (process.env.NODE_ENV == "production") {
        return true;
    }
    return false;
}
exports.isProduction = isProduction;
function md5(text) {
    return crypto.createHash("md5").update(text).digest("hex");
}
exports.md5 = md5;
function parseJson(text) {
    try {
        return JSON.parse(text);
    }
    catch (e) {
        return {};
    }
}
exports.parseJson = parseJson;
function getRandomString(length, isAllnumber = false) {
    let text = "";
    let possibleArray = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let possibleNumberArray = "0123456789";
    for (let i = 0; i < length; i++)
        if (isAllnumber) {
            text += possibleNumberArray.charAt(Math.floor(Math.random() * possibleNumberArray.length));
        }
        else {
            text += possibleArray.charAt(Math.floor(Math.random() * possibleArray.length));
        }
    return text;
}
exports.getRandomString = getRandomString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFrQztBQUVsQztJQUNJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBTEQsb0NBS0M7QUFFRCxhQUFvQixJQUFZO0lBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUZELGtCQUVDO0FBRUQsbUJBQTBCLElBQVk7SUFDbEMsSUFBSSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUNMLENBQUM7QUFORCw4QkFNQztBQUVELHlCQUFnQyxNQUFjLEVBQUUsY0FBdUIsS0FBSztJQUV4RSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLGFBQWEsR0FBRyxrQ0FBa0MsQ0FBQztJQUN2RCxJQUFJLG1CQUFtQixHQUFHLFlBQVksQ0FBQztJQUN2QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFDM0IsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDO0lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDO0FBWkQsMENBWUMifQ==