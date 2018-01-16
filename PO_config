
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  fields: {
    email: 'Username',
    password: 'Password'
  },
  submitButton: 'Login',

  sendForm(email, password) {
    I.fillField(this.fields.email, 'tester@testapp.com');
    I.fillField(this.fields.password, 'test');
    I.click(this.submitButton)
  }
}
