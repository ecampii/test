
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  login() {
      I.fillField({css: 'input[id=\'my_amaysim2_user_session_login\']'}, '0468827174');
      I.fillField('input[id=\'password\']', 'theHoff34');
      I.click('label[for=\'show_password\']');
      // I.seeInField('input[id=\'password\']', 'theHoff34');
      I.click('label[for=\'show_password\']');
      I.dontSee('theHoff34');
      I.click('input[id=\'login_button\']');
  }

}
