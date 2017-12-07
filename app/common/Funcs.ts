import _ = require("lodash");

function parseQueryKeyword(keyword: string = "") {
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

export {
  parseQueryKeyword,
};
