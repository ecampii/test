
Feature('Basic');

Scenario('Basic My Settings Use Flow', (I) => {
  I.amOnPage("/");
  I.resizeWindow("maximize");
  I.click("Login");

  //Login
  I.fillField({css: 'input[id=\'my_amaysim2_user_session_login\']'}, '0468827174');
  I.fillField('input[id=\'password\']', 'theHoff34');
  I.click('label[for=\'show_password\']');
  // I.seeInField('input[id=\'password\']', 'theHoff34');
  I.click('label[for=\'show_password\']');
  I.dontSee('theHoff34');
  I.click('input[id=\'login_button\']');

  //Nav to My Settings
  I.waitForElement('div[id=\'main_menu_container\'] a[href=\'/my-account/my-amaysim/settings\']', 50);
  // I.see('Test Nickname', '#sim_select');
  I.click('a[href=\'/my-account/my-amaysim/settings\']');

  //Update Nickname
  I.waitForElement('a[href*=\'edit_sim_nickname\']', 50);
  I.click('a[href*=\'edit_sim_nickname\']');
  I.waitForElement('input[id=\'my_amaysim2_setting_phone_label\']', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 20);
  // I.seeInField('input[id=\'my_amaysim2_setting_phone_label\']', 'Test Nickname');
  I.clearField('input[id=\'my_amaysim2_setting_phone_label\']');
  I.fillField('input[id=\'my_amaysim2_setting_phone_label\']', 'johndoe');
  I.click('input[name=\'commit\']');
  I.waitForText('johndoe', 50, '#settings_sim_nickname');


  //Nav out and verify sim is changed
  //SYstem is not respond on time and need to reload several times before the new user name takes place.

  // I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  // I.click('a[href*=\'/my-account/my-amaysim/clients\']');
  // I.waitForElement('div[id=\'main_menu_container\'] a[href=\'/my-account/my-amaysim/settings\']', 50);
  // I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  // I.click('a[href=\'/my-account/my-amaysim/settings\']');
  // I.waitForElement('div[id=\'main_menu_container\'] a[href=\'/my-account/my-amaysim/settings\']', 50);
  // I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  // I.click('a[href*=\'/my-account/my-amaysim/clients\']');
  // I.see('johndoe', '#sim_select');
  // I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  // I.click('a[href=\'/my-account/my-amaysim/settings\']');

  //Nav back and return original nickname
  // I.waitForElement('a[href*=\'edit_sim_nickname\']', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('a[href*=\'edit_sim_nickname\']');
  I.waitForElement('input[id=\'my_amaysim2_setting_phone_label\']', 20);
  // I.seeInField('input[id=\'my_amaysim2_setting_phone_label\']', 'johndoe');
  I.clearField('input[id=\'my_amaysim2_setting_phone_label\']');
  I.fillField('input[id=\'my_amaysim2_setting_phone_label\']', 'Test Nickname');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('input[name=\'commit\']');
  I.waitForText('Test Nickname', 50, '#settings_sim_nickname');


  //Recharge pin
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('a[href*=\'edit_recharge_pin\']');
  I.waitForElement('input[id=\'my_amaysim2_setting_topup_pw\']', 50);
  // I.seeInField('input[id=\'my_amaysim2_setting_topup_pw\']', '1234');
  I.clearField('input[id=\'my_amaysim2_setting_topup_pw\']');
  I.fillField('input[id=\'my_amaysim2_setting_topup_pw\']', '2345');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('input[name=\'commit\']');


  //Recharge pin back
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('a[href*=\'edit_recharge_pin\']');
  I.waitForElement('input[id=\'my_amaysim2_setting_topup_pw\']', 50);
  // I.seeInField('input[id=\'my_amaysim2_setting_topup_pw\']', '2345');
  I.clearField('input[id=\'my_amaysim2_setting_topup_pw\']');
  I.fillField('input[id=\'my_amaysim2_setting_topup_pw\']', '1234');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('input[name=\'commit\']');

  //Caller ID
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_caller_id_out\']');
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Call waiting
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_caller_waiting\']');
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Voice mail
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_voice_mail\']');
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Usage Alert
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_usage_alert\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'reveal-modal confirm-modal padding-none open\']', 50);
  I.waitForText('Please note that turning off usage alerts means you may incur excess usage charges', 20);
  I.click('div[id=\'confirm_popup\'] a[id=\'confirm_popup_no\']');

  //Intl Roaming
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_intl_roaming\']');
  // I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Caller ID back
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_caller_id_out\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Call waiting  back
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_caller_waiting\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Voice mail back
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_voice_mail\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Intl Roaming back
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('label[for=\'my_amaysim2_setting_intl_roaming\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'reveal-modal confirm-modal padding-none open\']', 50);
  I.waitForText('We strongly recommend using a local SIM when you travel outside of Australia as it will be costly if you roam with amaysim.', 20);
  I.click('div[id=\'confirm_popup\'] a[id=\'confirm_popup_yes\']');
  I.waitForText('We have successfully updated your SIM settings.', 20);
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('div[class=\'form_info_popup reveal-modal padding-none open\'] a[class=\'close-reveal-modal\']');

  //Call Forwarding
  I.click('a[href*=\'edit_call_forwarding\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.waitForText('Would you like to continue?', 20);
  I.click('Cancel');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);

  //SMS Limit
  I.click('a[href*=\'edit_premium_sms_limit\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.click('a[id=\'cancel_settings_premium_sms_limit\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);

  //Auto Recharge
  I.click('a[href*=\'edit_auto_recharge\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);
  I.click('a[id=\'show_settings_auto_recharge\']');
  I.waitForElement('div[id="ajax_loading"][style="display: none;"]', 50);
  I.waitForElement('div[class=\'form_info_popup reveal-modal padding-none open\']', 50);





  pause()



});

//
// Feature('Car Quote');
//
// Scenario('Basic Get Car Quote', (I) => {
//   I.amOnPage("/");
//   I.resizeWindow("maximize");
//   I.click("a[id='getcarquote']");
//
//   I.waitForText("Sydney Testers Car Insurance", 50, "h3");
//   I.seeInCurrentUrl("/car");
//   I.selectOption("select[id='make']", 'Lexus');
//   I.fillField("input[id='year']", "100");
//   I.fillField("input[id='age']", "12");
//   I.fillField("input[id='email']", "johndoe@yopmail.com");
//   I.wait(5);
//   I.click("button[id='getquote']");
//
//   // I.waitForText('12', 20, 'dd');
//   // // I.waitForText('johndoe@yopmail.com', 20, 'dd');
//   // I.waitForText("Male", 20);
//   // I.waitForText("Lexus", 20);
//   // I.waitForText("100", 20);
//   // I.waitForText("New South Wales", 20);
//   //
//   // I.waitForText("$35.74", 20);
//   // I.seeInCurrentUrl("/quote");
//   // I.waitForElement("a[id='payment']", 50);
//   I.click("a[id='payment']");
//
//   I.waitForText("Sydney Testers Insurance Payment", 50, "h3");
//   I.fillField("input[id='cardholdername']", "John Doe");
//   I.click("button[id='pay']");
//   I.fillField("input[id='card-number']", "4111 1111 1111 1111");
//   I.fillField("input[id='cvv']", '111');
//   I.click("button[id='pay']");
//   // I.waitForVisible("input[id='password']", 50);
//   // I.click("input[id='password']");
//   // I.fillField("input[id='password']", "testerpwd");
//   // I.click("input[id='username']");
//   // I.fillField("input[id='username']", "John Doe");
//   // I.selectOption("select[id='expiry-month']", 'Feb (02)');
//   // I.selectOption("select[id='expiry-year']", '2023');
//   // I.wait(5);
//   // I.click("button[id='pay']");
//
//
//   I.waitForText("Payment NOT Sucessful", 50, "h3");
//   I.waitForText("Your payment of $35.74 is NOT successful as it is less than $50!!", 50, "dt");
//

//
// });
