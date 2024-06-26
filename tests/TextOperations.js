import {Selector, fixture, test} from 'testcafe'

fixture('Text Operations')
    .page("https://practicetestautomation.com/practice-test-login/");

test('Text Operations', async t =>
{
    await t
        .maximizeWindow()
        .typeText('#username',"student");
    await t.typeText("#password","Password123");
    await t.click("#submit");

    const loginText = await Selector("h1.post-title").innerText;
    await t.expect(loginText).eql("Logged In Successfully");
});