//new test cafes script

// 1. import test cafe module
import { Selector } from 'testcafe';

//2. declare a fixture
fixture `Getting Started`

//3. test for http://devexpress.github.io/testcafe/example
  .page `http://localhost:4300/`;

//4. creates test function
test('Step_1', async t => {

  await t
    .typeText("#username", "lgutwinski@gutwinski.at")
    .typeText("#password", "umpalumpaumpalumpa")
    .click(".button--primary")
    .navigateTo("http://localhost:4300/audits/create-audit")
// STEP 1. Defining audit
// Name
    .typeText(".audit-step__field", "Test")
// Type
    .click(".div:nth-child(2), .select.select-dropdown__select.select--placeholder")
    .click(".dropdown__content.select-dropdown__content.jsDropdownContent, label:nth-child(2)")
// Auditor
    .click(".div:nth-child(3), .select.multiselect__select.select--placeholder")
// check an auditor
    .click(".multiselect-content__checkbox ng-untouched ng-pristine ng-valid, label:nth-child(16)")
    .click(".div:nth-child(3), .multiselect-content__action")
// Organizer
    .click(".div:nth-child(4), .select.multiselect__select.select--placeholder")
// check an organizer
    .click(".multiselect-content__checkbox ng-untouched ng-pristine ng-valid, label:nth-child(22)")
    .click(".div:nth-child(4), .multiselect-content__action")
// Go to audit plan (finish Step 1)
    .click(".button--primary.audit-step__button")
//STEP 2. Audit plan
// Start date (the end date will be set automatically)
    .click(".div:nth-child(1), .dropdown.dropdown--date-time-picker.dropdown")
    .click(".button.button--primary.timepicker__action")
// Audited area
    .click(".div:nth-child(3), .audit-plan-form__area")
    //DUNNO HOW TO IMPROVE IT, ANYWAY IT WORKS
    .click("#facilityModal > div > div > div > div > div.modal__content > gw-select-facility > form > gw-facility-tree-view > ul > li:nth-child(4) > gw-expand-box > div > div.expand-box__header > label")
    .click("#facilityModal > div > div > div > div > div.modal__actions.text-right.button-group > button.button--primary")
// Location
    .typeText(".columns small-12 medium-6 form__field audit-step__field, div:nth-child(4)", "Room 1")
// Auditees
    .click(".div:nth-child(6), .select.multiselect__select.select--placeholder")
// check 2 auditees
    .click(".multiselect-content__checkbox ng-untouched ng-pristine ng-valid, label:nth-child(14)")
    .click(".multiselect-content__checkbox ng-untouched ng-pristine ng-valid, label:nth-child(13)")
    .click(".div:nth-child(6), .multiselect-content__action")
// Plan the audit (finish Step 2)
    .click(".button--primary.audit-step__button")
    .click(".button.button--primary")
// Skiping Step 3 (do not send e-mails)
    .click(".button.button--primary.audit-step__button")
// STEP 4. Audit questions
    .click(".link--primary")
    //DUNNO HOW TO IMPROVE IT, ANYWAY IT WORKS
    .click("#questionsCanvas > div > div > div > div > div.modal__content > gw-edit-questions > div > ul.edit-questions__list.edit-questions__list--level-1 > li:nth-child(1) > gw-expand-box > div > div.expand-box__header > div > label > span.item__name")
    .click("#questionsCanvas > div > div > div > div > div.modal__actions.text-right.button-group > button.button--primary")
// SAVING AN Audit
    .click("button.button.button--primary");
});
