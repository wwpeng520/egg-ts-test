
export const DEFAULT_SEARCH_PAGESIZE: number = 20;
export const MAX_SEARCH_PAGESIZE: number = 20;

export const ArrayType = {
  JSON: 'json',
  STRING: 'string',
  NUMBER: 'number',
  DATE: 'date'
};

export const VerifyCodeState = {
  Created: 0,
  Fail: -1,
  Success: 1
};

export const LastCursorDefault = "-init";

export const VerifyCodeType = {
  Register: "register",
  Login: "login",
  Wechat: "wechat",
  InviteRegister: "invite_register",
};

export const DaYuApi = {
  Key: '23393773',
  Secret: '13644144b2c0b55faf9a9fd7f76224bd'
}

export const userTableMenus = ['Role', 'User', 'Permission'];

export const ErrorCodes = {
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
  SMS:{
    BUSINESS_LIMIT_CONTROL:{
      Code: 10000,
      Message: "test:BUSINESS_LIMIT_CONTROL",
    },
    MOBILE_NUMBER_ILLEGAL:{
      Code: 10000,
      Message: "test:MOBILE_NUMBER_ILLEGAL",
    },
    OUT_OF_SERVICE:{
      Code: 10000,
      Message: "test:OUT_OF_SERVICE",
    },
    Other_Error:{
      Code: 10000,
      Message: "test:Other_Error",
    }
  }
};

export const HTTPMethodDict = [
  "GET",
  "POST",
  "DELETE",
  "PUT",
  "PATCH",
];

export enum ContentType {
  HTML,
  JSON,
  XML,
  JSONP,
  TEXT,
  FILE,
  CSVFILE,
  EXCELFILE,
  JPGFILE,
  PNGFILE,
}

export const HeadersContentType = {
  JSON: "application/json",
  Multipart: "multipart/form-data",
  WWWForm: "application/x-www-form-urlencoded",
};


export const UserAgent = {
  Chrome: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/58.0.3029.110 Safari/537.36",
  IPhone: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) " +
  "Version/8.0 Mobile/12A366 Safari/600.1.4",
  QQBrowser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrom" +
  "e/50.0.2661.75 Safari/537.36 QQBrowser/4.1.4540.400",
};
// export const dataTableMenus = ['Config', 'News', 'TMTNews', 'TechNews', 'TopicTemp', 'NewsSite', 'RssSite', 'WXSite'];
