const _ = require('lodash');

module.exports = function splitSlug(filePath) {
  return _.kebabCase(_.split(filePath, '.', 2)[1]);
};
