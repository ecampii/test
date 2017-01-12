
Feature('Basic');

Scenario('Basic My Settings Use Flow', function (I, loginPage, mySettingsPage) {
  I.amOnPage("/");
  I.resizeWindow("maximize");
  I.click("Login");

  loginPage.login();

  //Nav to My Settings
  I.waitForElement('div[id=\'main_menu_container\'] a[href=\'/my-account/my-amaysim/settings\']', 50);
  I.click('a[href=\'/my-account/my-amaysim/settings\']');

  mySettingsPage.updateNickname('johndoe');
  mySettingsPage.updateNickname('Test Nickname');

  mySettingsPage.rechargePIN('2345');
  mySettingsPage.rechargePIN('1234');
  mySettingsPage.callerID();
  mySettingsPage.callerID();
  mySettingsPage.callWaiting();
  mySettingsPage.callWaiting();
  mySettingsPage.voicemail();
  mySettingsPage.voicemail();
  mySettingsPage.usageAlert('no');
  mySettingsPage.usageAlert('yes');
  mySettingsPage.intlRoaming(false);
  mySettingsPage.intlRoaming(true);
  mySettingsPage.callForwarding();
  mySettingsPage.SMSLimit();
  mySettingsPage.autoRecharge();


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
