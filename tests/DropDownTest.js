import { Selector, test } from "testcafe"

fixture `Select the options from Drop down`
    .page("https://devexpress.github.io/testcafe/example/")
    .skipJsErrors();

test('Select an option from the drop down', async t =>{

    const drpDwnInterface = Selector("#preferred-interface");
    const interfaceOption = drpDwnInterface.find('option');

    await t
           .click(drpDwnInterface)
           .click(interfaceOption.withText("JavaScript API"))
           .expect(drpDwnInterface.value).eql('JavaScript API');
});

test('Select a country from the drop down', async t =>
{
    await t.navigateTo("https://testautomationpractice.blogspot.com/").maximizeWindow();
    const countrySelect = Selector("#country");
    const countryOption = countrySelect.find('option');

    await t 
           .click(countrySelect)
           .click(countryOption.withText("Brazil"))
           .expect(countrySelect.value).eql("brazil");
    
});

test("Select a color from the drop down", async t =>
{
    await t.navigateTo("https://testautomationpractice.blogspot.com/").maximizeWindow();
    const colorSelect = Selector("#colors");
    const colorOptions = colorSelect.find('option');

    await t
           .click(colorSelect)
           .click(colorOptions.withText("White"));
});