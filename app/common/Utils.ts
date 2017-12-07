import crypto = require("crypto");

export function isProduction(): boolean {
    if (process.env.NODE_ENV == "production") {
        return true;
    }
    return false;
}

export function md5(text: string): string {
    return crypto.createHash("md5").update(text).digest("hex");
}

export function parseJson(text: string) {
    try {
        return JSON.parse(text);
    } catch (e) {
        return {};
    }
}

export function getRandomString(length: number, isAllnumber: boolean = false): string {

    let text = "";
    let possibleArray = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let possibleNumberArray = "0123456789";
    for (let i = 0; i < length; i++)
        if (isAllnumber) {
            text += possibleNumberArray.charAt(Math.floor(Math.random() * possibleNumberArray.length));
        } else {
            text += possibleArray.charAt(Math.floor(Math.random() * possibleArray.length));
        }
    return text;
}
