'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addCustomerInfo = function addCustomerInfo (req, res, next, body) {
  Default.addCustomerInfo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchCustomers = function searchCustomers (req, res, next, searchString) {
  Default.searchCustomers(searchString)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
