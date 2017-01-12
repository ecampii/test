
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  updateNickname(nickname) {
    I.waitForElement('a[href*=\'edit_sim_nickname\']', 50);
    I.click('a[href*=\'edit_sim_nickname\']');
    I.waitForElement('input[id=\'my_amaysim2_setting_phone_label\']', 20);
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    // I.seeInField('input[id=\'my_amaysim2_setting_phone_label\']', 'Test Nickname');
    I.clearField('input[id=\'my_amaysim2_setting_phone_label\']');
    I.fillField('input[id=\'my_amaysim2_setting_phone_label\']', nickname);
    I.click('input[name=\'commit\']');
    I.waitForText(nickname, 50, '#settings_sim_nickname');
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);

  },

  rechargePIN(pin) {
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('a[href*=\'edit_recharge_pin\']');
    I.waitForElement('input[id=\'my_amaysim2_setting_topup_pw\']', 50);
    // I.seeInField('input[id=\'my_amaysim2_setting_topup_pw\']', '1234');
    I.clearField('input[id=\'my_amaysim2_setting_topup_pw\']');
    I.fillField('input[id=\'my_amaysim2_setting_topup_pw\']', '2345');
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('input[name=\'commit\']');

  },

  callerID() {
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('label[for=\'my_amaysim2_setting_caller_id_out\']');
    I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
    I.waitForText('We have successfully updated your SIM settings.', 20);
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  },


  callWaiting() {
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('label[for=\'my_amaysim2_setting_caller_waiting\']');
    I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
    I.waitForText('We have successfully updated your SIM settings.', 20);
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  },

  voicemail() {
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('label[for=\'my_amaysim2_setting_voice_mail\']');
    I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
    I.waitForText('We have successfully updated your SIM settings.', 20);
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  },

  usageAlert(key) {
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('label[for=\'my_amaysim2_setting_usage_alert\']');
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.waitForElement('div[class=\'reveal-modal confirm-modal padding-none open\']', 50);
    I.waitForText('Please note that turning off usage alerts means you may incur excess usage charges', 20);
    I.click('div[id=\'confirm_popup\'] a[id*=\'' + key + '\']');

  },

  intlRoaming(set = true) {
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('label[for=\'my_amaysim2_setting_intl_roaming\']');
    if (set) {
      I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
      I.waitForElement('div[class=\'reveal-modal confirm-modal padding-none open\']', 50);
      I.waitForText('We strongly recommend using a local SIM when you travel outside of Australia as it will be costly if you roam with amaysim.', 20);
      I.click('div[id=\'confirm_popup\'] a[id=\'confirm_popup_yes\']');
    }
    I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
    I.waitForText('We have successfully updated your SIM settings.', 20);
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  },

  callForwarding() {
    I.click('a[href*=\'edit_call_forwarding\']');
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
    I.waitForText('Would you like to continue?', 20);
    I.click('Cancel');
    I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
    I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  }


}
