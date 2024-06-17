'use strict';


/**
 * adds CustomerInfo
 * Adds CustomerInfo to the system
 *
 * body CustomerBasicInfo CustomerInfo to add (optional)
 * no response value expected for this operation
 **/
exports.addCustomerInfo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * gets a customers basic information
 * By passing in the Customers unique identifier you will get that users basic information 
 *
 * searchString String pass an optional search string for looking up inventory (optional)
 * returns List
 **/
exports.searchCustomers = function(searchString) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "Bob",
  "lastName" : "BobsLastName",
  "gender" : "Male",
  "messageInformation" : {
    "source" : "SwaggerExamplePage"
  },
  "OtherContactInfo" : {
    "preferredLanguage" : "American Sign",
    "preferredContactMethod" : "email",
    "phone" : {
      "areaCode" : "408",
      "phoneType" : "Business",
      "preFix" : "867",
      "lineNumber" : "5309"
    },
    "email" : "jedwards@nope.com"
  },
  "fixedAddress" : false,
  "familyPlanningBenefits" : false,
  "county" : "Anderson",
  "middleName" : "Robert",
  "dateOfBirth" : "2016-08-29",
  "assistanceWithInsurance" : false,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "firstName" : "Bob",
  "lastName" : "BobsLastName",
  "gender" : "Male",
  "messageInformation" : {
    "source" : "SwaggerExamplePage"
  },
  "OtherContactInfo" : {
    "preferredLanguage" : "American Sign",
    "preferredContactMethod" : "email",
    "phone" : {
      "areaCode" : "408",
      "phoneType" : "Business",
      "preFix" : "867",
      "lineNumber" : "5309"
    },
    "email" : "jedwards@nope.com"
  },
  "fixedAddress" : false,
  "familyPlanningBenefits" : false,
  "county" : "Anderson",
  "middleName" : "Robert",
  "dateOfBirth" : "2016-08-29",
  "assistanceWithInsurance" : false,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

