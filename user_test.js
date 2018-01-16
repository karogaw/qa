
Feature('user_creation @user', {retries: 3});

let mailbox;

Before((I, loginPage) => {
  I.amOnPage('/login');
  loginPage.sendForm()
});

Scenario('proper user creation', function* (I) {
   I.click('Users');
   I.fillField('Name', 'User');
   I.fillField('Lastname', 'Test');
   I.createMailbox('');
    I.wait(0.3);
   mailbox = yield I.getMailbox();
   console.log(mailbox);
   I.fillField('E-mail', mailbox.address);
   I.click('Save');
   I.waitForMessage();
   mailbox = yield I.getMailbox();
   console.log(mailbox);
 })
