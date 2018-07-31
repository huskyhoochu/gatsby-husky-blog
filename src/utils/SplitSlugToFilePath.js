const _ = require('lodash');

module.exports = function splitSlug(filePath) {
  return `/${_.split(filePath, '.', 2)[1]}`;
};
