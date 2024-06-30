import {Selector, fixture} from 'testcafe'

const dataSet = require("../Testdata/LoginData.json");

fixture `Data Drive Test`
   
dataSet.forEach(data =>
{
    console.log(data);
    test.page('https://the-internet.herokuapp.com/login')
    (`Login Page - ${data.expectedResult}`, async t =>
    {

        await t.maximizeWindow();
        await t.typeText("#username", data.username);
        await t.typeText("#password", data.password);
        await t.wait(3000);
        await t.click("button i");
        t.expect(Selector("div#flash").innerText, data.expectedResult);    
    });
});
