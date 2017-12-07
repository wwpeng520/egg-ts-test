"use strict";
const Utils = require("../common/Utils");
const Constants = require("../constant");
class CError {
    constructor(error, message = null) {
        if (error) {
            this.code = error.Code;
            if (message) {
                this.showMessage = message;
            }
            else {
                this.showMessage = error.Message;
            }
        }
        else {
            this.code = Constants.ErrorCodes.System.Unknown.Code;
            this.showMessage = Constants.ErrorCodes.System.Unknown.Message;
        }
    }
    static clone(err) {
        let clonedErr = new CError(null);
        Object.getOwnPropertyNames(err).forEach(property => {
            if (Utils.isProduction()) {
                return;
            }
            clonedErr[property] = err[property];
        });
        return clonedErr;
    }
}
;
module.exports = CError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0Vycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ0Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBMEM7QUFDMUMseUNBQXlDO0FBT3pDO0lBT0ksWUFBWSxLQUFnQixFQUFFLFVBQWtCLElBQUk7UUFDaEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQy9CLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDckMsQ0FBQztRQUVMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbkUsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQVU7UUFDbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQVFKO0FBQUEsQ0FBQztBQUVGLGlCQUFTLE1BQU0sQ0FBQyJ9