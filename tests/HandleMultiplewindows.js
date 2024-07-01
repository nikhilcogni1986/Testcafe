import { Selector } from "testcafe";

fixture `Handle multiple windows`
    .page("https://phptravels.com/")
    .skipJsErrors();

let url ="";
test("Handling multiple windows", async t =>{

    const ySelector = Selector("div.social a[href*='phptravelsofficial']");
   
    
    url = await t.eval(() => document.documentURI);
    console.log(url);
    await t.expect(url).eql("https://phptravels.com/");

    await t.click(ySelector).wait(3000);

    url = await t.eval(() => document.documentURI);
    console.log(url);
    await t.expect(url).eql("https://www.youtube.com/c/phptravelsofficial");

});