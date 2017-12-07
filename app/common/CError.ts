import Utils = require("../common/Utils");
import * as Constants from '../constant';

interface ErrorType {
    Code: number;
    Message: string;
}

class CError implements Error {
    public code: number;
    public showMessage: string;
    public message: string;
    public name: string;
    public stack: any;

    constructor(error: ErrorType, message: string = null) {
        if (error) {
            this.code = error.Code;
            if (message) {
                this.showMessage = message;
            } else {
                this.showMessage = error.Message;
            }

        } else {
            this.code = Constants.ErrorCodes.System.Unknown.Code;
            this.showMessage = Constants.ErrorCodes.System.Unknown.Message;
        }

    }

    static clone(err: Error) {
        let clonedErr = new CError(null);
        Object.getOwnPropertyNames(err).forEach(property => {
            if (Utils.isProduction()) {
                return;
            }
            clonedErr[property] = err[property]
        });
        return clonedErr;
    }

    // static getErrorText(code: number): string {
    //     return "unkown";
        // for(let key in Object.keys(Constants.ErrorCodes)){

        // }
    // }
};

export = CError;
