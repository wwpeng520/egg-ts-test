"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SEARCH_PAGESIZE = 20;
exports.MAX_SEARCH_PAGESIZE = 20;
exports.ArrayType = {
    JSON: 'json',
    STRING: 'string',
    NUMBER: 'number',
    DATE: 'date'
};
exports.VerifyCodeState = {
    Created: 0,
    Fail: -1,
    Success: 1
};
exports.LastCursorDefault = "-init";
exports.VerifyCodeType = {
    Register: "register",
    Login: "login",
    Wechat: "wechat",
    InviteRegister: "invite_register",
};
exports.DaYuApi = {
    Key: '23393773',
    Secret: '13644144b2c0b55faf9a9fd7f76224bd'
};
exports.userTableMenus = ['Role', 'User', 'Permission'];
exports.ErrorCodes = {
    System: {
        Unknown: {
            Code: 10000,
            Message: "未知错误",
        },
        NotAllowed: {
            Code: 10001,
            Message: "无权限操作",
        },
        NotFound: {
            Code: 10002,
            Message: "404",
        },
        UnAuthenticated: {
            Code: 10003,
            Message: "test:UnAuthenticated",
        },
        ServerError: {
            Code: 10004,
            Message: "test:ServerError",
        }
    },
    Register: {
        PhoneExist: {
            Code: 10000,
            Message: "test:PhoneExist",
        },
        VerifyCodeError: {
            Code: 10000,
            Message: "test:VerifyCodeError",
        },
        VerifyCodeExpired: {
            Code: 10000,
            Message: "test:VerifyCodeExpired",
        },
    },
    Login: {
        PhoneNotExist: {
            Code: 10000,
            Message: "test:PhoneNotExist",
        }
    },
    Validation: {
        MissField: {
            Code: 10000,
            Message: "test:Validation",
        },
        WrongField: {
            Code: 10000,
            Message: "test:WrongField",
        },
    },
    SMS: {
        BUSINESS_LIMIT_CONTROL: {
            Code: 10000,
            Message: "test:BUSINESS_LIMIT_CONTROL",
        },
        MOBILE_NUMBER_ILLEGAL: {
            Code: 10000,
            Message: "test:MOBILE_NUMBER_ILLEGAL",
        },
        OUT_OF_SERVICE: {
            Code: 10000,
            Message: "test:OUT_OF_SERVICE",
        },
        Other_Error: {
            Code: 10000,
            Message: "test:Other_Error",
        }
    }
};
exports.HTTPMethodDict = [
    "GET",
    "POST",
    "DELETE",
    "PUT",
    "PATCH",
];
var ContentType;
(function (ContentType) {
    ContentType[ContentType["HTML"] = 0] = "HTML";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["XML"] = 2] = "XML";
    ContentType[ContentType["JSONP"] = 3] = "JSONP";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["FILE"] = 5] = "FILE";
    ContentType[ContentType["CSVFILE"] = 6] = "CSVFILE";
    ContentType[ContentType["EXCELFILE"] = 7] = "EXCELFILE";
    ContentType[ContentType["JPGFILE"] = 8] = "JPGFILE";
    ContentType[ContentType["PNGFILE"] = 9] = "PNGFILE";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
exports.HeadersContentType = {
    JSON: "application/json",
    Multipart: "multipart/form-data",
    WWWForm: "application/x-www-form-urlencoded",
};
exports.UserAgent = {
    Chrome: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) " +
        "Chrome/58.0.3029.110 Safari/537.36",
    IPhone: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) " +
        "Version/8.0 Mobile/12A366 Safari/600.1.4",
    QQBrowser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrom" +
        "e/50.0.2661.75 Safari/537.36 QQBrowser/4.1.4540.400",
};
// export const dataTableMenus = ['Config', 'News', 'TMTNews', 'TechNews', 'TopicTemp', 'NewsSite', 'RssSite', 'WXSite'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNhLFFBQUEsdUJBQXVCLEdBQVcsRUFBRSxDQUFDO0FBQ3JDLFFBQUEsbUJBQW1CLEdBQVcsRUFBRSxDQUFDO0FBRWpDLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxNQUFNO0lBQ1osTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBRVcsUUFBQSxlQUFlLEdBQUc7SUFDN0IsT0FBTyxFQUFFLENBQUM7SUFDVixJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ1IsT0FBTyxFQUFFLENBQUM7Q0FDWCxDQUFDO0FBRVcsUUFBQSxpQkFBaUIsR0FBRyxPQUFPLENBQUM7QUFFNUIsUUFBQSxjQUFjLEdBQUc7SUFDNUIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixjQUFjLEVBQUUsaUJBQWlCO0NBQ2xDLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRztJQUNyQixHQUFHLEVBQUUsVUFBVTtJQUNmLE1BQU0sRUFBRSxrQ0FBa0M7Q0FDM0MsQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVoRCxRQUFBLFVBQVUsR0FBRztJQUN4QixNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsT0FBTztTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLEtBQUs7U0FDZjtRQUNELGVBQWUsRUFBRTtZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLHNCQUFzQjtTQUNoQztRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLGtCQUFrQjtTQUM1QjtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsaUJBQWlCO1NBQzNCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsd0JBQXdCO1NBQ2xDO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUI7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLGlCQUFpQjtTQUMzQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLGlCQUFpQjtTQUMzQjtLQUNGO0lBQ0QsR0FBRyxFQUFDO1FBQ0Ysc0JBQXNCLEVBQUM7WUFDckIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsNkJBQTZCO1NBQ3ZDO1FBQ0QscUJBQXFCLEVBQUM7WUFDcEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsNEJBQTRCO1NBQ3RDO1FBQ0QsY0FBYyxFQUFDO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUscUJBQXFCO1NBQy9CO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsa0JBQWtCO1NBQzVCO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUc7SUFDNUIsS0FBSztJQUNMLE1BQU07SUFDTixRQUFRO0lBQ1IsS0FBSztJQUNMLE9BQU87Q0FDUixDQUFDO0FBRUYsSUFBWSxXQVdYO0FBWEQsV0FBWSxXQUFXO0lBQ3JCLDZDQUFJLENBQUE7SUFDSiw2Q0FBSSxDQUFBO0lBQ0osMkNBQUcsQ0FBQTtJQUNILCtDQUFLLENBQUE7SUFDTCw2Q0FBSSxDQUFBO0lBQ0osNkNBQUksQ0FBQTtJQUNKLG1EQUFPLENBQUE7SUFDUCx1REFBUyxDQUFBO0lBQ1QsbURBQU8sQ0FBQTtJQUNQLG1EQUFPLENBQUE7QUFDVCxDQUFDLEVBWFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFXdEI7QUFFWSxRQUFBLGtCQUFrQixHQUFHO0lBQ2hDLElBQUksRUFBRSxrQkFBa0I7SUFDeEIsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxPQUFPLEVBQUUsbUNBQW1DO0NBQzdDLENBQUM7QUFHVyxRQUFBLFNBQVMsR0FBRztJQUN2QixNQUFNLEVBQUUseUZBQXlGO1FBQ2pHLG9DQUFvQztJQUNwQyxNQUFNLEVBQUUsa0dBQWtHO1FBQzFHLDBDQUEwQztJQUMxQyxTQUFTLEVBQUUsOEZBQThGO1FBQ3pHLHFEQUFxRDtDQUN0RCxDQUFDO0FBQ0YseUhBQXlIIn0=