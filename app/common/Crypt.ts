import * as _ from 'lodash';
const crypto = require("crypto");
const algorithm = 'aes-128-cbc';
const iv = "w#58FyiUIEaZ65v1";
const password = iv.split("").reverse().join("");
const b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

export function encrypt(text) {
    // let clearEncoding = 'utf8';
    let cipherEncoding = 'base64'; // hex, base64

    let cipher = crypto.createCipheriv(algorithm, password, iv);
    return cipher.update(text, 'utf8', 'base64') + cipher.final(cipherEncoding);
};

export function decrypt(text) {

    let clearEncoding = 'utf8';
    let cipherEncoding = 'base64'; // hex, base64

    // let decipher:any = crypto.createDecipheriv(algorithm, password, iv);
    // decipher.setAutoPadding( true);
    // let plainChunks = [];
    // plainChunks.push(decipher.update(text, 'utf8', 'base64'));
    // plainChunks.push(decipher.final('utf8'));
    // let plaintext = plainChunks.join('');

    var cipherChunks = ['', text];
    var decipher = crypto.createDecipher(algorithm, password);
    var plainChunks = [];
    for (var i = 0; i < cipherChunks.length; i++) {
        plainChunks.push(decipher.update(cipherChunks[i], cipherEncoding, clearEncoding));
    }
    plainChunks.push(decipher.final(clearEncoding));
    return plainChunks.join('');
    // return (plaintext);
}

export function encode(data) {
    data = xor_encrypt(password, data);
    return b64_encode(data);
}

export function decode(data) {
    data = b64_decode(data);
    return xor_decrypt(password, data);
}

function b64_encode(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
    if (!data) { return data; }
    do {
        o1 = data[i++];
        o2 = data[i++];
        o3 = data[i++];
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;
        enc += b64_table.charAt(h1) + b64_table.charAt(h2) + b64_table.charAt(h3) + b64_table.charAt(h4);
    } while (i < data.length);
    r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
}

function b64_decode(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
    if (!data) { return data; }
    data += "";
    do {
        h1 = b64_table.indexOf(data.charAt(i++));
        h2 = b64_table.indexOf(data.charAt(i++));
        h3 = b64_table.indexOf(data.charAt(i++));
        h4 = b64_table.indexOf(data.charAt(i++));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;
        result.push(o1);
        if (h3 !== 64) {
            result.push(o2);
            if (h4 !== 64) {
                result.push(o3);
            }
        }
    } while (i < data.length);
    return result;
}

function keyCharAt(key, i) {
    return key.charCodeAt(Math.floor(i % key.length));
}

function xor_encrypt(key, data) {
    return _.map(data, (c: string, i) => {
        return c.charCodeAt(0) ^ keyCharAt(key, i);
    });
}

function xor_decrypt(key, data: string) {
    return _.map(data, (c: number, i) => {
        return String.fromCharCode(c ^ keyCharAt(key, i));
    }).join("");
}
