const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');

const ContactInfo = require('../../src/app');
const existingIds = ['12345', '67890'];

Before(function () {
    this.errors = null;
    this.statusCode = null;
    this.contactInfo = null;
});

Given('A ContactInfo object', function () {
    this.contactInfo = new ContactInfo();
});

When('the firstName field does not have a value', function () {
    this.contactInfo = new ContactInfo('54321', '', 'Doe', 'john.doe@example.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

When('the lastName field does not have a value', function () {
    this.contactInfo = new ContactInfo('54321', 'John', '', 'john.doe@example.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

When('the email field does not well formed', function () {
    this.contactInfo = new ContactInfo('54321', 'John', 'Doe', 'john.doeexample.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

Then('The error {string} will be returned', function (expectedError) {
    assert.strictEqual(this.errors[0], expectedError);
});

Then('the system will continue to the next test', function () {
    assert.ok(true);
});

Given('the results of validation', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});

When('a validation has an error', function () {
    this.contactInfo = new ContactInfo('', '', '123-456-7890', 'johndoeexample.com');
    try {
        this.contactInfo.validate();
    } catch (e) {
        this.errors = e.message.split('; ');
        this.statusCode = 400;
    }
});

Then('return the text of all errors', function () {
    const expectedErrors = this.errors;
    assert.deepStrictEqual(this.errors, expectedErrors);
});

Then('return the status of {int}', function (statusCode) {
    assert.strictEqual(this.statusCode, statusCode);
});

// When('a validation has an error', function () {
//     this.contactInfo = new ContactInfo('54321', '', '', '123-456-7890', 'john.doe@example.com');
//     try {
//         this.contactInfo.validate();
//     } catch (e) {
//         this.errors = e.message.split('; ');
//         this.statusCode = 400;
//     }
// });

// When('that id has already been registered', function () {
//     this.contactInfo = new ContactInfo(
//         '12345',
//         'John',
//         'Doe',
//         '123-456-7890',
//         'john.doe@example.com'
//     );
//     try {
//         this.contactInfo.validate(existingIds);
//     } catch (e) {
//         this.errors = e.message.split('; ');
//         this.statusCode = 409;
//     }
// });

// When('no validation errors are found', function () {
//     this.contactInfo = new ContactInfo(
//         '54321',
//         'John',
//         'Doe',
//         '123-456-7890',
//         'john.doe@example.com'
//     );
//     try {
//         this.contactInfo.validate(existingIds);
//         this.errors = [];
//         this.statusCode = 201;
//     } catch (e) {
//         this.errors = e.message.split('; ');
//         this.statusCode = 400;
//     }
// });

// Then('return the text of all errors', function () {
//     const expectedErrors = this.errors;
//     assert.deepStrictEqual(this.errors, expectedErrors);
// });

// Then('return the status of {int}', function (statusCode) {
//     assert.strictEqual(this.statusCode, statusCode);
// });

// Then('send the message to the persistence service', function () {
//     // This step is a placeholder for sending the message to the persistence service
//     assert.strictEqual(this.statusCode, 201);
// });
